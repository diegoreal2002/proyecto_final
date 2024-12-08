// resources/js/Pages/Home.jsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Home({ auth, products, categories }) {
    

    return (
        <>
            <Head title="Home" />
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            {auth.user ? (
                                    <NavLink
                                        href={route('dashboard')}
                                        active={route().current('dashboard')}
                                    >
                                        Dashboard
                                    </NavLink>
                                ) : (
                                    <>
                                        <NavLink
                                            href={route('login')}
                                            className=""
                                        >
                                            Log in
                                        </NavLink>
                                        <NavLink
                                            href={route('register')}
                                            className=""
                                        >
                                            Register
                                        </NavLink>
                                    </>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
               <div className='container-fluid p-5'>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">Videogames</h2>
               </div>
                <div className='items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse p-5'>
                        {products.map(product => (
                            <div key={product.id} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={'/products/'+product.slug}>
                                <img class="p-8 rounded-t-lg" src={'/storage/'+product.image} alt="product image" />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                </a>
                                <div class="flex items-center mt-2.5 mb-5">
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{product.stock}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
                <div className='container-fluid p-5'>
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">Categories</h2>
               </div>                
               <div className=''>
                    <ul className='p-5'>
                        {categories.map(category => (
                            <span key={category.id} className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{category.name}</span>
                        ))}
                    </ul>   
                </div>
        </>
    );
}
