<?php
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('backend.admin.index');
