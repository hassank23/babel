<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CategoryVisit;
use App\Models\User;
use App\Models\Artical;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = ["اراء","فيديو و صور","ثقافة", "رياضة", "اقتصاد", "أخبار", "الرئيسية"];

        $images = [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=500&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?w=500&h=500&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&h=500&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1564135624576-c5c88640f235?w=500&h=500&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=500&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99"
        ];
             
        
        
        foreach ($categories as $category) {
            $visits = rand(0, 100);
            $unique_visits = rand(0, $visits);
            $imageIndex = array_rand($images); // Selects a random key/index from the array
            $randomImageUrl = $images[$imageIndex]; // Access the value at the random index
        
            CategoryVisit::create([
                'category' => $category,
                'visits' => $visits,
                'image' => $randomImageUrl, // Use the random image URL
                'unique_visits' => $unique_visits,
                'ip_address' => "192.167.1.1",
            ]);
        }
        User::create([
            'name' => 'admin',
            'email' => 'admin@babel.com',
            'password' => bcrypt('admin123'),
        ]);
        $this->call([
            ArticalesSeeder::class
            ]);
    }
}
