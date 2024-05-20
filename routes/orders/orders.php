<?php

use App\Http\Controllers\orders\OrdersController;
use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(OrdersController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("/requisicao", 'index' )->name("order.create");
    });

});