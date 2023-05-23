<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'visits',
        'unique_visits',
        'ip_address',
        'image', // Add the 'image' attribute to the $fillable array
    ];
}
