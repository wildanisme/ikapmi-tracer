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
        Schema::create('master_provinces', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('name', 128);
            $table->decimal('lat', 10, 7)->nullable();
            $table->decimal('lng', 10, 7)->nullable();
            $table->timestamps();
        });

        Schema::create('master_cities', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('province_code', 10)->index();
            $table->string('name', 128);
            $table->decimal('lat', 10, 7)->nullable();
            $table->decimal('lng', 10, 7)->nullable();
            $table->timestamps();
        });

        Schema::create('master_districts', function (Blueprint $table) {
            $table->id();
            $table->string('code', 12)->unique();
            $table->string('city_code', 10)->index();
            $table->string('name', 128);
            $table->decimal('lat', 10, 7)->nullable();
            $table->decimal('lng', 10, 7)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('master_districts');
        Schema::dropIfExists('master_cities');
        Schema::dropIfExists('master_provinces');
    }
};
