<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteDetailsController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('backend.admin.index');
Route::get('/admin/site-details', [SiteDetailsController::class, 'index'])->name('backend.siteDeatils.index');
