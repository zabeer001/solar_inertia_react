<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteDetailsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('backend.admin.index');
    // Route::get('/admin/site-details', [SiteDetailsController::class, 'index'])->name('backend.siteDetails.index');
    Route::get('/admin/site-details/update', [SiteDetailsController::class, 'ceateOrEdit'])->name('backend.siteDetails.storeOrUpdate');


    Route::post('/admin/site-details', [SiteDetailsController::class, 'store'])->name('siteDetails.store');

   // Route for updating site details
Route::put('/admin/site-details/{siteDetails}', [SiteDetailsController::class, 'update'])->name('site-details.update');

});

