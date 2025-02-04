<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'category', 'price', 'sizes', 'image', 'images', 'qty', 'description'
    ];

    protected $casts = [
        'sizes' => 'array', // Convert JSON to array
        'images' => 'array', // Convert JSON to array
    ];
    
}

