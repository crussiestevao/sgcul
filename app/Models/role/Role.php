<?php

namespace App\Models\role;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    public function users(){
        return $this->belongsToMany(User::class, "user_has_role","role_id","user_id");
    }
    
    
    public static function superadmin(){
        return static::where('slug', 'super_admin')->first();
    }

    public static function localadmin(){
        return static::where('slug', 'local_admin')->first();
    } 

    public static function supervisor(){
        return static::where('slug', 'supervisor')->first();
    }

}
