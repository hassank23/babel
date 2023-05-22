<?php

namespace App\Http\Controllers;

use App\Models\CategoryVisit;
use Illuminate\Http\Request;

class CategoryVisitController extends Controller
{
    public function store(Request $request, $category)
    {
        // Find the category visit record in the database
        $categoryVisit = CategoryVisit::where('category', $category)->first();
        
        if ($categoryVisit) {
            // Increment the visit count if the category visit record exists
            $categoryVisit->increment('visits');
        } else {
            // Create a new category visit record if it doesn't exist
            CategoryVisit::create([
                'category' => $category,
                'visits' => 1,
            ]);
        }
        
        return response()->json(['message' => 'Category visit recorded successfully']);
    }
}
