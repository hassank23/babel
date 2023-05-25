<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;

class ArticalesSeeder extends Seeder
{
    public function run()
    {
        Article::create([
            'title' => " حادث امني ",
            'text' => "وقع حادث امني في منطقة الحمراء في لبنان في ٢٣ ايار ٢٠٠٧ ",
            'imageUrl' => 'https://images.pexels.com/photos/236148/pexels-photo-236148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'category' => "أخبار",
        ]);
        Article::create([
            'title' => "اطلالات جميلة",
            'text' => "اطلالة جميلة في الروشة ",
            'imageUrl' => 'https://images.pexels.com/photos/6915112/pexels-photo-6915112.png',
            'category' =>' فيديو و صور'
        ]);
        Article::create([
            'title' => "اقتصاد لبنان 
            ",
            'text' => "تدهور الوضع الاقتصادي في لبنان",
            'imageUrl' => 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'category' => 'اقتصاد',
        ]);
        Article::create([
            'title' => "في الشرق الاوسط ",
            'text' => "يحتوي هذا المقال على نصائح جوجل العربية ، كيفية زيادة حركة المرور من ceo حول كيفية تحسين حركة البحث ",
            'imageUrl' => 'https://images.pexels.com/photos/236148/pexels-photo-236148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'category' => "الرئيسية"
        ]);
        Article::create([
            'title' => "في الرياضة ",
            'text' => "النصر  يتعاقد مع الظاهرة رونالدو",
            'imageUrl' => 'https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'category' => "رياضة",
        ]);
    }
}
