<?php

namespace Database\Seeders;

use App\Models\role\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\role\RoleSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(RoleSeeder::class);
        $roles = Role::all();

        $armando = User::create([
            "name" => "armando paulo",
            "email" => "armandopaulo@gmail.com",
            "password" => \Hash::make(12345678),
        ]);

        $armando->role()->attach($roles->pluck('id'));

        $joao = User::create([
            "name" => "Joao Faquira",
            "email" => "joaofaquira@gmail.com",
            "password" => \Hash::make(12345678),
        ]);

        $joao->role()->attach($roles->pluck('id'));

        $fernando = User::create([
            "name" => "fernando",
            "email" => "fernando@gmail.com",
            "password" => \Hash::make(12345678),
        ]);


        $fernando->role()->attach($roles->pluck('id'));


        $crussi = User::create([
            "name" => "Crussi Estevao",
            "email" => "crussiestevao@gmail.com",
            "password" => \Hash::make(12345678),
        ]);

        $crussi->role()->attach($roles->pluck('id'));

    }
}
