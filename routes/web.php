<?php

use App\Http\Controllers\dashaboard\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->to('/dashboard');
});

Route::get('/dashboard', [DashboardController::class, 'index'])
->middleware(['auth', 'verified'])
->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::controller(StationController::class)->middleware('auth')->group(function(){
    Route::get('estacoes/de/abastecimentos', 'index')->name('stations.list')->can('local_admin');
    Route::post('station/add/new', 'store')->name('station.add.new')->can('local_admin');
    Route::get('station/{id}/balances', 'getBalances')->name('station.get.balances')->can('local_admin');
    Route::post('statation/payments', 'makePayments')->name('station.make.payment')->can('local_admin');
    Route::post('statation/deposits', 'makeDeposits')->name('station.make.deposits')->can('local_admin');
});


require __DIR__.'/auth.php';
require __DIR__.'/user/user.php';
require __DIR__.'/products/products.php';
require __DIR__.'/categories/categories.php';
require __DIR__.'/orders/orders.php';
