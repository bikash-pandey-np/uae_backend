<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\AccountController;
use App\Http\Controllers\Backend\AssetController;
use App\Http\Controllers\Backend\CustomerController;
use App\Http\Controllers\Backend\DepositController;
use App\Http\Controllers\Backend\PositionController;
use App\Http\Controllers\Backend\WithdrawController;
use App\Http\Controllers\Backend\AuthController;



Route::prefix('login')->group(function () {
    Route::get('/', [AuthController::class, 'showLoginForm'])
        ->name('login');
    Route::post('/', [AuthController::class, 'login']);
});

Route::middleware(['only_admin'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
    })->name('dashboard');
    
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::prefix('account')->group(function () {
        Route::get('/', [AccountController::class, 'index'])
            ->name('account.index');
        Route::get('/create', [AccountController::class, 'getCreate'])
            ->name('account.create');

        Route::post('/create', [AccountController::class, 'store']);

        Route::get('/{id}/update', [AccountController::class, 'getUpdate'])
            ->name('account.update');

        Route::put('/{id}/update', [AccountController::class, 'update']);
    });

    Route::prefix('asset')->group(function () {
        Route::get('/', [AssetController::class, 'index'])
            ->name('asset.index');
        Route::get('/create', [AssetController::class, 'getCreate'])
            ->name('asset.create');

        Route::post('/create', [AssetController::class, 'store']);

        Route::get('/{id}/update', [AssetController::class, 'getUpdate'])
            ->name('asset.update');

        Route::put('/{id}/update', [AssetController::class, 'update']);
    });

    Route::prefix('customer')->group(function () {
        Route::get('/', [CustomerController::class, 'index'])
            ->name('customer.index');
        Route::get('/create', [CustomerController::class, 'getCreate'])
            ->name('customer.create');

        Route::post('/create', [CustomerController::class, 'store']);

        Route::get('/{id}/update', [CustomerController::class, 'getUpdate'])
            ->name('customer.update');

        Route::put('/{id}/update', [CustomerController::class, 'update']);
    });

    Route::get('/deposit/create', [DepositController::class, 'getCreate'])
        ->name('deposit.create');

    Route::prefix('deposit')->group(function () {
        Route::get('/', [DepositController::class, 'index'])
            ->name('deposit.index');
        Route::get('/deposit-details/{id}', [DepositController::class, 'show'])
            ->name('deposit.show');

        Route::post('/', [DepositController::class, 'store'])
            ->name('deposit.store');

        Route::post('/{id}/approve', [DepositController::class, 'approve'])
            ->name('deposit.approve');
        Route::post('/{id}/reject', [DepositController::class, 'reject'])
            ->name('deposit.reject');
    });

    Route::prefix('withdraw')->group(function () {
        Route::get('/', [WithdrawController::class, 'index'])
            ->name('withdraw.index');
        Route::get('/create', [WithdrawController::class, 'getCreate'])
            ->name('withdraw.create');

        Route::get('/withdraw-details/{id}', [WithdrawController::class, 'show'])
            ->name('withdraw.show');
        Route::post('/', [WithdrawController::class, 'store'])
            ->name('withdraw.store');

        Route::post('/{id}/approve', [WithdrawController::class, 'approve'])
            ->name('withdraw.approve');
        Route::post('/{id}/reject', [WithdrawController::class, 'reject'])
            ->name('withdraw.reject');
    });
});
