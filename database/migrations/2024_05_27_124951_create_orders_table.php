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
        Schema::create('orders', function (Blueprint $table) {

            $table->id();
            $table->timestamps();
            $table->string('order')->nullable()->unique();
            $table->string('type')->nullable();
            $table->string('registration')->nullable();
            $table->decimal('balance', 10,2)->nullable();
            $table->decimal('credit', 10,2)->nullable();
            $table->decimal('debit', 10,2)->nullable();
            $table->string('driver')->nullable();
            $table->string('customer')->nullable();
            $table->integer('customer_id')->nullable();
            $table->decimal('unit_price',10,2)->nullable();
            $table->dateTime('expirity_date')->nullable();
            $table->dateTime('validated_at')->nullable();
            $table->decimal('amount', 10,2)->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('station_id')->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('user_id')->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
