<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;

class ArticlesSeeder extends Seeder
{
    public function run()
    {
        $categories = ['news', 'photos-videos', 'economy', 'culture', 'sport'];

        foreach ($categories as $category) {
            for ($i = 1; $i <= 3; $i++) {
                Article::create([
                    'title' => "Article {$i} for {$category}",
                    'text' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    'imageUrl' => '../../public/sport.jpg',
                    'category' => $category,
                ]);
            }
        }
    }
}
