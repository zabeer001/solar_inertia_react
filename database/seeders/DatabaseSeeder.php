<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'zahidul.bdcalling@gmail.com',
            'password' => bcrypt('admin1234')
        ]);

        // Call the SiteDetailsSeeder
        $this->call([
            SiteDetailsSeeder::class,
            CampaignDetailsSeeder::class,
        ]);
    }
}
