<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use App\Http\Controllers\Frontend\AuthController;
use App\Http\Controllers\Frontend\DashboardController;


Route::get('/', [DashboardController::class, 'getDashboardPage'])->name('frontend.dashboard');

Route::prefix('login')->group(function () {
    Route::get('/', [AuthController::class, 'showLoginForm'])->name('app.login');
    Route::post('/', [AuthController::class, 'login']);
});
Route::prefix('register')->group(function () {
    Route::get('/', [AuthController::class, 'showRegisterForm'])->name('app.register');
    Route::post('/', [AuthController::class, 'register']);
});


Route::get('/deposit', [DashboardController::class, 'getDepositPage'])
    ->middleware('only_cust')
    ->name('frontend.deposit');

Route::get('/withdraw', [DashboardController::class, 'getWithdrawPage'])
    ->middleware('only_cust')
    ->name('frontend.withdraw');

Route::post('/withdraw', [DashboardController::class, 'handleWithdrawRequest'])
    ->middleware('only_cust');

Route::get('/profile', [DashboardController::class, 'getProfilePage'])
    ->middleware('only_cust')
    ->name('frontend.profile');

Route::get('/portfolio', [DashboardController::class, 'getPortfolioPage'])
    ->middleware('only_cust')
    ->name('frontend.portfolio');

Route::get('/verify-email', [DashboardController::class, 'getVerifyEmailPage'])
    ->middleware('only_cust')
    ->name('frontend.verify-email');

Route::post('/generate-otp', [DashboardController::class, 'generateOtp'])
    ->middleware('only_cust')
    ->name('frontend.generate-otp');

Route::post('/verify-otp', [DashboardController::class, 'verifyOtp'])
    ->middleware('only_cust')
    ->name('frontend.verify-otp');

Route::get('/verify-kyc', [DashboardController::class, 'getVerifyKycPage'])
    ->middleware('only_cust')
    ->name('frontend.verify-kyc');

Route::post('/verify-kyc', [DashboardController::class, 'handleVerifyKycRequest'])
    ->middleware('only_cust');


Route::get('/change-password', [DashboardController::class, 'getChangePasswordPage'])
    ->middleware('only_cust')
    ->name('frontend.change-password');

Route::post('/change-password', [DashboardController::class, 'handleChangePasswordRequest'])
    ->middleware('only_cust');

Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('only_cust')
    ->name('frontend.logout');

Route::get('/withdraw-history', [DashboardController::class, 'getWithdrawHistoryPage'])
    ->middleware('only_cust')
    ->name('frontend.withdraw-history');

Route::get('/deposit-history', [DashboardController::class, 'getDepositHistoryPage'])
    ->middleware('only_cust')
    ->name('frontend.deposit-history');
