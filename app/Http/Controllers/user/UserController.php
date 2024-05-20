<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\role\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UserController extends Controller
{
     public function index()
     {

          $users = User::all();

          $roles = Role::all();

          $data = compact("users", 'roles');

          return Inertia::render("User/User", $data);
     }


     public function store(Request $request)
     {
          $roles = Role::whereIn('id', $request->roles)->pluck('id');

          $user = User::create([
               'name' => $request->name,
               'email' => $request->email,
               'password' => $request->password ? Hash::make($request->password) : Hash::make(Str::lower(explode(' ', $request->name)[0]) . '@123')
          ]);

          $user->roles()->sync($roles);

          $users = User::all();

          return compact('users');
     }
}
