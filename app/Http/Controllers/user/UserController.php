<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
     public function index (){
      
      $users = User::all();

      $data = compact("users");
      
        return Inertia::render("User/User", $data);
     }
}
