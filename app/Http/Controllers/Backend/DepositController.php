<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Deposit;
use Inertia\Inertia;
use DB;

class DepositController extends Controller
{
    public function index(Request $request)
    {
        $query = Deposit::with(['currency', 'depositedBy']);

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('transaction_code', 'like', "%{$search}%")
                  ->orWhereHas('depositedBy', function($q) use ($search) {
                      $q->where('customer_code', 'like', "%{$search}%");
                  });
            });
        }

        $deposits = $query->latest()->paginate(10);
        return Inertia::render('Deposit/List', [
            'deposits' => $deposits,
            'search' => $request->input('search')
        ]);
    }
    public function show($id)
    {
        $deposit = Deposit::with(['currency', 'depositedBy', 'account'])->findOrFail($id);
        return Inertia::render('Deposit/Show', ['deposit' => $deposit]);
    }


    public function getCreate()
    {
        $currencies = \App\Models\Currency::all();
        $customers = \App\Models\Customer::all();
        $accounts = \App\Models\Account::all();
        return Inertia::render('Deposit/Create', [
            'currencies' => $currencies,
            'customers' => $customers,
            'accounts' => $accounts
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'request_amount' => 'required|numeric',
            'currency_id' => 'required|exists:currencies,id',
            'deposited_by' => 'required|exists:customers,id',
            'type' => 'required|in:cash,account',
        ]);

        $deposit = new Deposit();
        $deposit->request_amount = $request->input('request_amount');
        $deposit->currency_id = $request->input('currency_id');
        $deposit->deposited_by = $request->input('deposited_by');
        $deposit->type = $request->input('type');
        $deposit->status = 'Processing';
        $deposit->requested_at =now();
        $deposit->account_id = $request->input('type') === 'cash' ? null : $request->input('account_id');
        $deposit->save();

        return redirect()->route('deposit.index')->with('success', 'Deposit created successfully.');
    }

    public function approve(Request $request, $id)
    {
        $request->validate([
            'approved_amount' => 'required|numeric',
        ]);

        DB::transaction(function () use ($request, $id) {
            $deposit = Deposit::findOrFail($id);
            $deposit->is_approved = true;
            $deposit->status = 'Approved';
            $deposit->approved_amount = $request->input('approved_amount');
            $deposit->approved_at = now();
            $deposit->save();

            // Update Customer balance and total_deposit
            $customer = $deposit->depositedBy;
            $customer->balance_usdt += $deposit->approved_amount;
            $customer->total_deposit += $deposit->approved_amount;
            $customer->save();
        });

        return redirect()->route('deposit.show', $id)->with('success', 'Deposit approved successfully.');
    }

    public function reject(Request $request, $id)
    {
        $request->validate([
            'reject_reason' => 'required|string',
        ]);

        $deposit = Deposit::findOrFail($id);
        $deposit->is_approved = false;
        $deposit->status = 'Rejected';
        $deposit->approved_amount = 0;
        $deposit->reject_reason = $request->input('reject_reason');
        $deposit->rejected_at = now();
        $deposit->save();

        return redirect()->route('deposit.show', $id)->with('success', 'Deposit rejected successfully.');
    }

}
