<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use App\Http\Controllers\Frontend\AuthController;

Route::prefix('register')->group(function () {
    Route::get('/', [AuthController::class, 'showRegisterForm'])->name('app.register');
    Route::post('/', [AuthController::class, 'register']);
});
