<?php

use App\Http\Controllers\BillingController;
use Illuminate\Support\Facades\Route;

Route::get('/zabeerfrotnend', function () {
    return 'This is Zabeer’s route!';
});


Route::get('/billing', [BillingController::class, 'index'])->name('frontend.billing');
Route::post('/billing/solarBuy', [BillingController::class, 'solarBuy'])->name('frontend.solarBuy');
