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
        Schema::create('balances', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->decimal('amount', 10,2)->nullable();
            $table->decimal('balance', 10,2)->nullable();
            $table->decimal('credit', 10,2)->nullable();
            $table->decimal('debit', 10,2)->nullable();
            $table->decimal('init_balance', 10,2)->nullable();
            $table->longText('obs')->nullable();
            $table->string('method')->nullable();
            $table->string('doc_number')->nullable();
            $table->dateTime('validated_at')->nullable();
            $table->foreignId('station_id')->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('balances');
    }
};
