import React from 'react';

export default function Product({ product }) {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category.name}</p>
        </div>
    );
}
