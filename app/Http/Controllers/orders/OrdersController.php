<?php

namespace App\Http\Controllers\orders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
{
    public function index(){
        return Inertia::render("Orders/Orders");
    }
}
