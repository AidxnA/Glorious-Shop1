import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <Link to={`/product/${product.slug}`}>
                <img src={product.image[0].fields.file.url} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-500">${product.price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
