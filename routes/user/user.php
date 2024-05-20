<?php


use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;


Route::controller(UserController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("user/creation/view", 'index')->name("user.create");
        Route::post("user/creation/store", 'store')->name("user.store");
        Route::put('user/{id}/delete', 'destroy')->name('user.delete');
    });

});


