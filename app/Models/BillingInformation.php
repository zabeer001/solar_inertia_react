<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillingInformation extends Model
{
    protected $fillable = [
        'user_id', 'amount', 'status', 'payment_method', 'payment_session_id',
        'product_name', 'email', 'phone', 'zip_code', 'town_city', 'street_address',
        'company_name', 'last_name', 'first_name'
    ];
}
