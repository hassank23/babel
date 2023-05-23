<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index($category)
    {
        $articles = Article::where('category', $category)->get();
    
        return response()->json(['articles' => $articles]);
    }

    public function show(Article $article)
    {
        return response()->json($article);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'text' => 'required',
            'imageUrl' => 'nullable',
            'category' => 'required',
        ]);

        $article = Article::create($validatedData);
        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'text' => 'required',
            'imageUrl' => 'nullable',
            'category' => 'required',
        ]);

        $article->update($validatedData);
        return response()->json($article);
    }

    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json(['message' => 'Article deleted successfully']);
    }
}
