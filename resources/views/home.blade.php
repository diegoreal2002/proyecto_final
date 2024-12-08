@extends('layouts.app')

@section('content')
    <h1>E-shop</h1>
    <h2>Categories</h2>
    <ul>
        @foreach ($categories as $category)
            <li>{{ $category->name }}</li>
        @endforeach
    </ul>
    <h2>Products</h2>
    <ul>
        @foreach ($products as $product)
            <li>{{ $product->name }}</li>
        @endforeach
    </ul>
@endsection
