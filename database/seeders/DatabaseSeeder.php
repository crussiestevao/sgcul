<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       

        User::create([
            "name"=> "armando paulo",
            "email"=> "armandopaulo@gmail.com",   
            "password"=> \Hash::make(12345678),
        ]); 

        User::create([
            "name"=> "Joao Faquira",
            "email"=> "joaofaquira@gmail.com",   
            "password"=> \Hash::make(12345678),
        ]);

        User::create([
            "name"=> "fernando",
            "email"=> "fernando@gmail.com",   
            "password"=> \Hash::make(12345678),
        ]);

        User::create([
            "name"=> "Crussi Estevao",
            "email"=> "crussiestevao@gmail.com",   
            "password"=> \Hash::make(12345678),
        ]);

    }
}
