<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\SiteDetailsController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {

    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('backend.admin.index');
    // Route::get('/admin/site-details', [SiteDetailsController::class, 'index'])->name('backend.siteDetails.index');
    
    Route::post('/admin/site-details', [SiteDetailsController::class, 'storeOrUpdate'])->name('siteDetails.storeOrUpdate');
    Route::get('/admin/site-details', [SiteDetailsController::class, 'showOrCreate'])->name('siteDetails.showOrCreate');

   // Route for updating site details
// Route::put('/admin/site-details/{siteDetails}', [SiteDetailsController::class, 'update'])->name('site-details.update');

// Route::get('/admin/content-shows', [ContentController::class, 'index'])->name('contentDetails.index');
// Route::post('/admin/content-details', [ContentController::class, 'storeOrUpdate'])->name('contentDetails.storeOrUpdate');
// Route::get('/admin/content-details', [ContentController::class, 'showOrCreate'])->name('contentDetails.showOrCreate');

Route::get('admin/contents', [ContentController::class, 'index'])->name('contents.index');
Route::get('admin/contents/create', [ContentController::class, 'create'])->name('contents.create');
Route::post('admin/contents', [ContentController::class, 'store'])->name('contents.store');
Route::get('admin/contents/{content}', [ContentController::class, 'show'])->name('contents.show');
Route::get('admin/contents/{content}/edit', [ContentController::class, 'edit'])->name('contents.edit');
Route::post('admin/contents/update', [ContentController::class, 'update'])->name('contents.update');
Route::delete('admin/contents/{content}', [ContentController::class, 'destroy'])->name('contents.destroy');


});

