<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Http\Resources\user\UserResourceCollection;
use App\Models\role\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
     public function index()
     {

          $users = new UserResourceCollection(User::all());

          if (request()->user()->can('superadmin')) {
               $roles = Role::all();
          } else {
               $roles = Role::where('slug', '!=', 'super_admin')->get();
          };

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

          $users = new UserResourceCollection(User::all());

          return $users;
     }

     public function destroy($id)
     {

          $user = User::findOrfail($id);
          $name = $user->name;

          $user->delete();

          return compact('name');
     }

     public function update(Request $request)
     {

          $user = User::find($request->id);
          
          $emailExists = User::where('email', $request->email)
               ->where('id', '!=', $user->id)
               ->exists();

          abort_if($emailExists, Response::HTTP_FORBIDDEN, 'O email ja pertence a um usuario inscrito');


          if (count($request->roles) > 0) {
               $roles = Role::whereIn(Role::table() . '.id', $request->input('roles'))->get();
               abort_if(($user->can('superadmin') && !request()->user()->can('superadmin')), Response::HTTP_FORBIDDEN, 'Nao podes alterar este usuario, SUPER ADMIN'); //abortar caso tente alteracao fucoes do super admin
               $user->roles()->sync($roles->pluck('id'));
          }

          if ($request->name != '') {
               $user->name  = $request->name;
               $user->email = $request->email;
          }

          if ($request->password != '') {
               $user->password = Hash::make($request->password);
          }

          $user->save();

          $users = new UserResourceCollection(User::all());

          return $users;
     }
}