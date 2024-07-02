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


Route::get('/', function () {
    return Inertia::render('Dashboard'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
})->name('dashboard');

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


