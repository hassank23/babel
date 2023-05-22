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
            $table->string('category');
            $table->unsignedInteger('visits')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_visits');
    }
}
