<?php

use App\Http\Controllers\products\ProductsController;
use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;


Route::controller(ProductsController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("/produtos", 'index' )->name("product.create");
    });

});
