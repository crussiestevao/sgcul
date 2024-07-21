<?php

namespace App\Http\Controllers\categories;

use App\Http\Controllers\Controller;
use App\Models\categories\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index(){
        
        $categories = Category::all();
        $data = compact('categories');

        return Inertia ::render("Categories/Categories", $data);
    }


    public function store(Request $request){

        $category = new Category();
        $category->name = $request->name; 
        $category->descriptions = $request->descriptions;
        $category->save();

        $categories = Category::all();

        return compact('categories');
    }

    public function update(Request $request){
      $category = Category::find($request->id);

      try {
        $category->name = $request->name;
        $category->descriptions = $request->descriptions;
        $category->save();
      } catch (\Throwable $th) {
        //throw $th;
      }

      $categories = Category::all();

      return compact('categories');
    }

    public function destroy($id){
        $category = Category::find($id);

        try {
            $category->delete();
          } catch (\Throwable $th) {
            //throw $th;
          }
    
          $categories = Category::all();
    
          return compact('categories');
    }


}