<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use App\Models\categories\Category;
use App\Models\product\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductsController extends Controller
{
    public function index(){
        
        $products = Product::all();
        $categories = Category::all();

        $data = compact('products', 'categories');
        return Inertia::render("Products/Products", $data);
    }

    public function store(Request $request){

        $counter = Product::count()+1;

        $prod = new Product();
        $prod->name = $request->name; 
        $prod->descriptions = $request->descriptions;
        $prod->price = $request->price;
        $prod->code = Str::upper(mb_substr($request->name, 0, 1)).''.$counter;
        $prod->save();

        $products = Product::all();

        return compact('products');
    }
}
