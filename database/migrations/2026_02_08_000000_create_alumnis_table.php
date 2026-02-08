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
        Schema::create('alumnis', function (Blueprint $table) {
            $table->id();
            $table->string('name', 512)->nullable();
            $table->string('nisn', 512)->nullable();
            $table->string('nipm', 512)->nullable();
            $table->string('gender', 512)->nullable();
            $table->text('address')->nullable();
            $table->string('phone_number', 32)->nullable();
            $table->string('province', 512)->nullable();
            $table->string('city', 512)->nullable();
            $table->string('district', 512)->nullable();
            $table->string('domisili', 512)->nullable();
            $table->integer('graduation_year')->nullable();
            $table->string('job', 512)->nullable();
            $table->string('company', 512)->nullable();
            $table->string('education_last', 512)->nullable();
            $table->string('department', 512)->nullable();
            $table->string('university', 512)->nullable();
            $table->string('province_code', 4)->nullable();
            $table->string('city_code', 6)->nullable();
            $table->string('district_code', 10)->nullable();
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
        Schema::dropIfExists('alumnis');
    }
};
