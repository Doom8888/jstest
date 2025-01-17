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
        Schema::create('escort_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('city_id');
            $table->string('image')->default('blank.svg');
            $table->string('firstName');
            $table->string('secondName');
            $table->string('lastName');
            $table->string('phone');
            $table->string('escort_title');
            $table->string('description')->nullable();
            $table->integer('phone_status')->default(0);
            $table->integer('email_status')->default(0);
            $table->timestamps();

            $table->index('user_id', 'escort_profiles_user_idx');
            $table->foreign('user_id', 'escort_profiles_user_fk')->on('users')->references('id');

            $table->index('city_id', 'escort_profiles_city_idx');
            $table->foreign('city_id', 'escort_profiles_city_fk')->on('cities')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escort_profiles');
    }
};
