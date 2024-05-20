<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index(){
    
        return Inertia::render("Products/Products");
    }
}
