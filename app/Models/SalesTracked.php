<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesTracked extends Model
{
    use HasFactory;

    protected $fillable = [
        'f_name',
        'l_name',
        'panels_purchased',
        'country',
        'street',
        'town',
        'state',
        'zip_code',
        'phone',
        'email',
    ];
}
