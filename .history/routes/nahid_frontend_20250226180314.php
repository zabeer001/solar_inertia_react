<?php
use App\Http\Controllers\CampaignDetailsController;
use App\Http\Controllers\SalesTrackedController;

use Illuminate\Support\Facades\Route;

    // Display all sales tracked records
Route::get('/billing', [Bill::class, 'index'])->name('sales_tracked.index');

    // Create new sales entry

