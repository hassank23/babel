<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('text');
            $table->string('imageUrl')->nullable();
            $table->string('category');
            $table->timestamps(); // Adds created_at and updated_at columns
        });

    }

    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
