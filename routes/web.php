<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StripeController;

Route::get('/', [HomeController::class, 'index'])->name('frontend.home.index');
Route::get('/blade-check', [HomeController::class, 'checkBlade'])->name('frontend.home.checkBlade');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



});

//Stripe Payment
Route::post('/stripe/payment', [StripeController::class, 'payment'])->name('stripe.payment');
Route::get('/stripe/success', [StripeController::class, 'success'])->name('stripe.success');
Route::get('/stripe/cancel', [StripeController::class, 'cancel'])->name('stripe.cancel');



require __DIR__ . '/auth.php';

require __DIR__ . '/zabeer_admin.php';
require __DIR__ . '/nahid_admin.php';
require __DIR__ . '/zabeer_frontend.php';
