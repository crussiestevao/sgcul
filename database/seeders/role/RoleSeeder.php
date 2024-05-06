<?php

namespace Database\Seeders\role;

use App\Models\role\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role1 = new Role();
        $role1->name = 'Super Admin';
        $role1->slug = 'super_admin';
        $role1->save();

        $role2 = new Role();
        $role2->name = 'Admin Local';
        $role2->slug = 'local_admin';
        $role2->save();

        $role3 = new Role();
        $role3->name = 'Supervisor';
        $role3->slug = 'supervisor';
        $role3->save(); 

        
    }
}
