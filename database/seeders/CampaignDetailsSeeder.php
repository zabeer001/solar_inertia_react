<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CampaignDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('campaign_details')->insert([
            'target' => 500000.00, // Total collection target
            'no_solar_panels' => 50, // Number of solar panels
            'energy_saved' => 15000000.00, // Energy saved in kWh
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }
}
