// resources/js/Pages/Home.jsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth, products, categories }) {
    return (
        <>
            <Head title="Home" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                <h1>Productos Disponibles</h1>
                <div>
                    <h2>Productos</h2>
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                {product.name} - {product.price}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Categorías</h2>
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>{category.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
