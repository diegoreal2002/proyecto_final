<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        // Obtener todas las categorías con sus productos
        $categories = Category::with('products')->get();

        // Retornar la vista con las categorías
        return view('categories.index', compact('categories'));
    }
}
