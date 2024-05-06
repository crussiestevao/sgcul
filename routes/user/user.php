<?php


use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;


Route::controller(UserController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("user/creation/view", [UserController::class, "index"])->name("user.create");
    });

});


