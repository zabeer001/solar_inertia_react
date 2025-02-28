<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('billing_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->decimal('amount', 8, 2);  // Store the amount in dollars
            $table->string('status');  // Store payment status like 'paid'
            $table->string('payment_method');  // Store payment method
            $table->string('payment_session_id')->unique();  // Stripe session ID
            $table->string('product_name')->nullable();  // Store product name or description
            $table->string('email')->nullable();  // Store customer email
            $table->string('phone')->nullable();  // Store phone number
            $table->string('zip_code')->nullable();  // Store postal code
            $table->string('town_city')->nullable();  // Store city
            $table->string('street_address')->nullable();  // Store street address
            $table->string('company_name')->nullable();  // Store company name
            $table->string('last_name')->nullable();  // Store last name
            $table->string('first_name')->nullable();  // Store first name
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('billing_information');
    }
};
