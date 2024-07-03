<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Withdraw;

use Inertia\Inertia;
use DB;

class WithdrawController extends Controller
{
    public function index(Request $request)
    {
        $query = Withdraw::with(['currency', 'requestedBy']);

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('transaction_code', 'like', "%{$search}%")
                  ->orWhereHas('requestedBy', function($q) use ($search) {
                      $q->where('customer_code', 'like', "%{$search}%");
                  });
            });
        }

        $withdraws = $query->latest()->paginate(10);
        return Inertia::render('Withdraw/List', [
            'withdraws' => $withdraws,
            'search' => $request->input('search', '')
        ]);
    }
    public function show($id)
    {
        $withdraw = Withdraw::with(['currency', 'requestedBy'])->findOrFail($id);
        return Inertia::render('Withdraw/Show', ['withdraw' => $withdraw]);
    }

    public function getCreate()
    {
        $currencies = \App\Models\Currency::all();
        $customers = \App\Models\Customer::all();
        return Inertia::render('Withdraw/Create', [
            'currencies' => $currencies,
            'customers' => $customers,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'request_amount' => 'required|numeric',
            'currency_id' => 'required|exists:currencies,id',
            'requested_by' => 'required|exists:customers,id',
            'wallet_addr' => 'nullable|string',
            'bank_info' => 'nullable|string',
        ]);

        $withdraw = new Withdraw();
        $withdraw->request_amount = $request->input('request_amount');
        $withdraw->currency_id = $request->input('currency_id');
        $withdraw->requested_by = $request->input('requested_by');
        $withdraw->wallet_addr = $request->input('wallet_addr');
        $withdraw->bank_info = $request->input('bank_info');
        $withdraw->status = 'Processing';
        $withdraw->requested_at = now();
        $withdraw->save();

        return redirect()->route('withdraw.index')->with('success', 'Withdraw created successfully.');
    }

    public function approve(Request $request, $id)
    {
        $request->validate([
            'request_amount' => 'required|numeric',
        ]);

        DB::transaction(function () use ($request, $id) {
            $withdraw = Withdraw::findOrFail($id);
            $withdraw->is_approved = true;
            $withdraw->status = 'Approved';
            $withdraw->request_amount = $request->input('request_amount');
            $withdraw->approved_at = now();
            $withdraw->save();

            // Update Customer balance and total_withdraw
            $customer = $withdraw->requestedBy;
            $customer->balance_usdt -= $withdraw->request_amount;
            $customer->total_withdraw += $withdraw->request_amount;
            $customer->save();
        });

        return redirect()->route('withdraw.show', $id)->with('success', 'Withdraw approved successfully.');
    }

    public function reject(Request $request, $id)
    {
        $request->validate([
            'reject_reason' => 'required|string',
        ]);

        $withdraw = Withdraw::findOrFail($id);
        $withdraw->is_approved = false;
        $withdraw->status = 'Rejected';
        $withdraw->reject_reason = $request->input('reject_reason');
        $withdraw->rejected_at = now();
        $withdraw->save();

        return redirect()->route('withdraw.show', $id)->with('success', 'Withdraw rejected successfully.');
    }
}