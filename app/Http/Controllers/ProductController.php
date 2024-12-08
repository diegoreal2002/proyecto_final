<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Category;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show($slug)
    {
        // Buscar el producto por su slug
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();

        // Retornar la vista con el producto
        return view('products.show', compact('product'));
    }

    public function create()
    {
        $categories = Category::all(); // Obtén todas las categorías
        return Inertia::render('Dashboard', [
            'categories' => $categories,
        ]);
    }
    
    public function index()
    {
        // Redirige a la raíz
        return redirect('/');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'slug' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|max:2048', // Validar imagen
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public'); // Guardar en storage/public/products
        }

        Product::create($validated);

        return redirect()->route('dashboard')->with('success', 'Product created successfully.');
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'slug' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|max:2048', // Validar imagen
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image); // Eliminar la imagen anterior
            }

            $validated['image'] = $request->file('image')->store('products', 'public'); // Guardar nueva imagen
        }

        $product->update($validated);

        return redirect()->route('dashboard')->with('success', 'Product updated successfully.');
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image); // Eliminar la imagen
        }

        $product->delete();

        return redirect()->route('dashboard')->with('success', 'Product deleted successfully.');
    }
}
