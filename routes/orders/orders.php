<?php

use App\Http\Controllers\orders\OrdersController;
use App\Http\Controllers\user\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(OrdersController::class)->group(function () {

    Route::middleware("auth")->group(function () {
        Route::get("/requisicao", 'index' )->name("order.validation.area");
        Route::get('/requisicao/emissao', 'emit')->name('order.new')->can('local_admin');
        Route::post('order/add/new', 'store')->name('order.add.new')->can('local_admin');
        Route::get('requisicao/{id}/print', 'print')->name('order.print')->can('local_admin');
        Route::get('validate/order/{id}/one', 'validateOne')->name('order.validate.one')->can('local_admin');
        Route::post('validate/order/all', 'validateAll')->name('order.validate.all')->can('local_admin');
        Route::put('order/{id}/delete', 'destroy')->name('order.delete')->can('local_admin');
        Route::post('order/update', 'update')->name('order.update')->can('local_admin');
    });

});