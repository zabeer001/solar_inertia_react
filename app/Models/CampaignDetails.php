<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class CampaignDetails extends Model
{
    use HasFactory;
    protected $fillable = ['target', 'no_solar_panels', 'energy_saved'];
}
