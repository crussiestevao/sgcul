<?php

use App\Http\Controllers\categories\CategoriesController;
use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(CategoriesController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("/categoria", 'index' )->name("categorie.create")->can('local_admin');
        Route::post('add/new/categorie', 'store')->name('categorie.add.new')->can('local_admin');
        Route::post('edit/categorie', 'update')->name('categorie.edit')->can('local_admin');
        Route::delete('delkete/categorie/{id}', 'destroy')->name('categorie.delete')->can('local_admin');
    });

});