<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Inertia\Inertia;
use App\Models\CountryCode;
use App\Models\Currency;


class AuthController extends Controller
{
    public function showRegisterForm()
    {
        return Inertia::render('Frontend/Auth/Register', [
        'countryCodes' => CountryCode::all(),
        'currencies' => Currency::all(),
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:customers',
            'password' => 'required|string|min:8|confirmed',
            'contact_no' => 'required'
        ]);

        $customer = Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // You can add additional logic here, such as logging in the user or redirecting them to a specific page

        return redirect()->route('frontend.dashboard');
    }
}