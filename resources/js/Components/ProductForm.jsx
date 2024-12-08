import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function ProductForm({ categories = [] }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [slug, setSlug] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category_id', categoryId);
        formData.append('stock', stock);
        formData.append('slug', slug);
        if (image) formData.append('image', image);

        Inertia.post('/products', formData); // Endpoint para crear producto
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-50 mx-auto p-5">
            <h1 className='block mb-2 text-lg font-large text-gray-900 dark:text-black'>Create Product</h1>
            <hr></hr>
            <div class="mt-5 mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-5">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-5">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Category</label>
                <input type="text" id="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} placeholder="Category ID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-5">
                <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Stock</label>
                <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mt-5 mb-5">
                <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Slug</label>
                <input type="text" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Image</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Create Product</button>
        </form>
    );
}
