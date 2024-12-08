<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/


// Ruta para crear un producto
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/dashboard', [ProductController::class, 'create'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    $products = Product::all();
    $categories = Category::all();

    return Inertia::render('Home', [
        'products' => $products,
        'categories' => $categories,
    ]);
});

// Redirigir /products a la página principal
Route::get('/products', function () {
    return redirect('/');
});

// Mostrar categorías en una página React
Route::get('/categories', function () {
    $categories = Category::all();

    return Inertia::render('Categories', [
        'categories' => $categories,
    ]);
});

// Mostrar un producto específico basado en su slug
Route::get('/products/{slug}', function ($slug) {
    $product = Product::where('slug', $slug)->firstOrFail();

    return Inertia::render('Product', [
        'product' => $product,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/products/{slug}', [ProductController::class, 'show']);
});

require __DIR__.'/auth.php';
