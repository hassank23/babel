<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CategoryVisit;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = ['news', 'photos-videos', 'economy', 'culture', 'sport'];

        foreach ($categories as $category) {
            CategoryVisit::create([
                'category' => $category,
                'visits' => 0,
            ]);
        }
    }
}
