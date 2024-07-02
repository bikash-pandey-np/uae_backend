<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;
use Inertia\Inertia;
use App\Models\Currency;


class AccountController extends Controller
{
    
    public function index()
    {
        $accounts = Account::with('currency')->get();
        return Inertia::render('Account/List', [
            'accounts' => $accounts
        ]);
    }

    public function getCreate() {
        return Inertia::render('Account/Create', [
            'currencies' => Currency::all(),
        ]);
    }

    public function getUpdate($id) {
        $account = Account::findOrFail($id);
        $currencies = Currency::all();

        return Inertia::render('Account/Update', [
            'account' => $account,
            'currencies' => $currencies,
        ]);
    }
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'currency_id' => 'required|exists:currencies,id',
            'deposit_instruction' => 'required|string',
            'is_active' => 'nullable|boolean',
            'wallet_addr' => 'nullable|string|max:255',
            'bank_name' => 'nullable|string|max:255',
            'acc_no' => 'nullable|string|max:255',
            'acc_name' => 'nullable|string|max:255',
        ]);

        try {
            $account = Account::findOrFail($id);
            $account->update($validatedData);
        } catch (\Exception $e) {
            return redirect()->route('account.update', ['id' => $id])->with('error', 'Failed to update account: ' . $e->getMessage());
        }
        return redirect()->route('account.index')->with('success', 'Account updated successfully.');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'currency_id' => 'required|exists:currencies,id',
            'deposit_instruction' => 'required|string',
            'is_active' => 'nullable|boolean',
            'wallet_addr' => 'nullable|string|max:255',
            'bank_name' => 'nullable|string|max:255',
            'acc_no' => 'nullable|string|max:255',
            'acc_name' => 'nullable|string|max:255',
        ]);

        try {
            Account::create($validatedData);
        } catch (\Exception $e) {
            return redirect()->route('account.create')->with('error', 'Failed to create account: ' . $e->getMessage());
        }
        return redirect()->route('account.index')->with('success', 'Account created successfully.');
    }
}
