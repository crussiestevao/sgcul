<?php

namespace App\Http\Controllers\orders;

use App\Http\Controllers\Controller;
use App\Models\product\Product;
use App\Models\station\Station;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
{
    public function index(){
        return Inertia::render("Orders/Orders");
    }

    public function emit(){

        $products = Product::all();
        $stations = Station::all();

        $data = compact('products','stations');

        return Inertia::render("Orders/NewOrder", $data);
    }

    public function store(Request $request){
        dd($request->all());
    }
}
