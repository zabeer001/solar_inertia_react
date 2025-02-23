<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteDetails extends Model
{
    protected $fillable = [
        'main_image',
        'gallery_image_1',
        'gallery_image_2',
        'logo',
        'hero_title',
        'hero_description',
        'card_text',
        'card_btn',
        
    ];
}
