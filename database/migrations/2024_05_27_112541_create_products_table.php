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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps(); 
            $table->string('code')->nullable()->default(null);
            $table->string('name');
            $table->text('descriptions')->nullable();
            $table->tinyInteger('is_stockable')->nullable();
            $table->decimal('min_quantity', 8, 2)->nullable();
            $table->decimal('price', 10, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('procucts');
    }
};
