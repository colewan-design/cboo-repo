<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrCreate(
            ['email' => 'cboo@admin.com'],
            [
                'name' => 'CBOO Admin',
                'password' => 'Password123', // The password will be hashed automatically by the model
                'role' => 'admin',
            ]
        );
    }
}

