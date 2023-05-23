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
        $categories = ['news', 'photos-videos', 'economy', 'culture', 'sport'];

        foreach ($categories as $category) {
            CategoryVisit::create([
                'category' => $category,
                'visits' => 0,
                'image' => '../../public/sport.jpg',
                'unique_visits' => 0,
                'ip_address' => null,
            ]);
        }
        User::create([
            'name' => 'admin',
            'email' => 'admin@babel.com',
            'password' => bcrypt('admin123'),
        ]);
    }
}
