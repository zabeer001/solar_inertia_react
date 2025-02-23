<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteDetails;

class SiteDetailsSeeder extends Seeder
{
    public function run(): void
    {
        SiteDetails::create([
            'main_image' => 'main.jpg',
            'gallery_image_1' => 'gallery1.jpg',
            'gallery_image_2' => 'gallery2.jpg',
            'logo' => 'logo.png',
            'hero_title' => 'Welcome to Our Site',
            'hero_description' => 'This is a long description about our site and its services.',
            'card_text' => 'Discover More',
            'card_btn' => 'Learn More',
        ]);
    }
}
