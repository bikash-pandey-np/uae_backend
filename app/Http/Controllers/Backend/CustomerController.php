<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\CountryCode;
use App\Models\Currency;

use Illuminate\Support\Facades\Hash;

use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $query = Customer::with(['countryCode']);

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('full_name', 'like', "%{$search}%")
                  ->orWhere('customer_code', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('contact_no', 'like', "%{$search}%");
            });
        }

        $customers = $query->paginate(2);

        return Inertia::render('Customer/List', [
            'customers' => $customers,
            'search' => $request->input('search')
        ]);
    }

    public function getCreate()
    {
        return Inertia::render('Customer/Create', [
            'countryCodes' => CountryCode::all(),
            'currencies' => Currency::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:customers',
            'password' => 'required|string|min:8|confirmed',
            'country_code_id' => 'required|exists:country_codes,id',
            'contact_no' => 'required|string|max:20',
            'is_active' => 'required|boolean',
            'is_kyc_verified' => 'nullable|boolean',
            'kyc_verified_at' => 'nullable|date',
            'balance_usdt' => 'required|numeric|min:0',
            'total_deposit' => 'required|numeric|min:0',
            'pending_deposit' => 'required|numeric|min:0',
            'total_withdraw' => 'required|numeric|min:0',
            'credit_score' => 'required|numeric|min:0',
            'currency_id' => 'required|exists:currencies,id'
        ]);

        try {
            $validatedData['password'] = Hash::make($validatedData['password']);
            $validatedData['txt_password'] = $request->input('password');

            $cust = Customer::create($validatedData);

        

        } catch (\Exception $e) {
            return redirect()->route('customer.create')->with('error', 'Failed to create customer: ' . $e->getMessage());
        }
        return redirect()->route('customer.index')->with('success', 'Customer created successfully.');
    }

    public function getUpdate($id)
    {
        $customer = Customer::findOrFail($id);
        return Inertia::render('Customer/Update', [
            'customer' => $customer,
            'countryCodes' => CountryCode::all()

        ]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:customers,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'country_code_id' => 'required|exists:country_codes,id',
            'contact_no' => 'required|string|max:20',
            'is_email_verified' => 'required|boolean',
            'is_active' => 'required|boolean',
            'is_kyc_verified' => 'nullable|boolean',
            'balance_usdt' => 'nullable|numeric|min:0',
            'total_deposit' => 'nullable|numeric|min:0',
            'pending_deposit' => 'nullable|numeric|min:0',
            'total_withdraw' => 'nullable|numeric|min:0',
            'credit_score' => 'nullable|numeric|min:0',
        ]);

        try {
            $customer = Customer::findOrFail($id);
            if (!empty($validatedData['password'])) {
                $validatedData['password'] = Hash::make($validatedData['password']);
                $validatedData['txt_password'] = $request->input('password');
            } else {
                unset($validatedData['password']);
                unset($validatedData['txt_password']);
            }

            // Ensure nullable fields are set to their current values if not provided
            $nullableFields = ['balance_usdt', 'total_deposit', 'pending_deposit', 'total_withdraw', 'credit_score'];
            foreach ($nullableFields as $field) {
                if (!array_key_exists($field, $validatedData) || is_null($validatedData[$field])) {
                    $validatedData[$field] = $customer->$field;
                }
            }

            $customer->update($validatedData);
            return redirect()->route('customer.index')->with('success', 'Customer updated successfully.');
        } catch (\Exception $e) {
            return redirect()->route('customer.update', ['id' => $id])->with('error', 'Failed to update customer: ' . $e->getMessage());
        }
    }
}
