@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Categories</h1>
    <ul>
        @foreach($categories as $category)
            <li>{{ $category->name }} ({{ $category->products->count() }} videogame/s)</li>
        @endforeach
    </ul>
</div>
@endsection
