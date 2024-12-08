@extends('layouts.app')

@section('content')
<div class="container border p-5 rounded">
    <h1>{{ $product->name }}</h1>
    <p>Description : {{ $product->description }}</p>
    <p>Price: ${{ $product->price }}</p>
    <p>Category: {{ $product->category->name }}</p>
</div>
@endsection
