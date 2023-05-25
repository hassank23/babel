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

            // Check if the IP address has not visited before for this category
            if (!$categoryVisit->ip_address || $categoryVisit->ip_address !== $request->ip()) {
                $categoryVisit->increment('unique_visits');
                $categoryVisit->ip_address = $request->ip();
                $categoryVisit->image = $imageURL;
                $categoryVisit->save();
            }
        } else {
            // Create a new category visit record if it doesn't exist
            CategoryVisit::create([
                'category' => $category,
                'visits' => 1,
                'unique_visits' => 1,
                'ip_address' => $request->ip(),
                'image' => $imageURL,
            ]);
        }

        return response()->json(['message' => 'Category visit recorded successfully']);
    }
}
