<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryVisitsTable extends Migration
{
    public function up()
    {
        Schema::create('category_visits', function (Blueprint $table) {
            $table->id();
            $table->string('category')->unique();
            $table->unsignedInteger('visits')->default(0);
            $table->unsignedInteger('unique_visits')->default(0);
            $table->ipAddress('ip_address')->nullable();
            $table->string('image')->nullable(); // Add the 'image' attribute
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_visits');
    }
}
