<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        if(auth()->check())
        {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        if(auth()->check())
        {
            return redirect()->route('dashboard');
        }
        
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);

        if (auth()->attempt($request->only('email', 'password'))) {
            return redirect()->route('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
