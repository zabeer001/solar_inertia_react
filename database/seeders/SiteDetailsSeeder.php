<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteDetails;

class SiteDetailsSeeder extends Seeder
{
    public function run(): void
    {
        SiteDetails::create([
            'main_image' => 'images/main.jpg',
            'gallery_image_1' => 'images/gallery1.jpg',
            'gallery_image_2' => 'images/gallery2.jpg',
            'logo' => 'images/logo.png',
            'hero_title' => 'Welcome to Our Site',
            'hero_description' => 'This is a long description about our site and its services.',
            'card_text' => 'Discover More',
            'card_btn' => 'Learn More',
        ]);
    }
}
