import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { getProductBySlug } from '../Api/Api';
import ProductActions from './ProductActions';



const ProductGuide = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductBySlug(slug);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-red-600 text-lg">Product not found</div>;
  }

  return (
    <div className="pt-12 px-6 text-black max-w-6xl mx-auto">

      <div className="flex flex-col md:flex-row gap-8 mt-8">

        {/* Left: Main Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          {product.image?.[0] && (
            <img
              src={product.image[0].url}
              alt={product.image[0].alt}
              className="w-full max-w-md mb-6 rounded shadow"
            />
          )}
          <p className="mb-4 text-gray-700">{product.description}</p>
          <div className="space-y-2 text-sm text-gray-800">
            {product.price && <p><strong>Price:</strong> {product.price}</p>}
            {product.status && <p><strong>Status:</strong> {product.status}</p>}
            {product.rating && <p><strong>Rating:</strong> {product.rating}</p>}
            {product.language && <p><strong>Language:</strong> {product.language}</p>}
            {product.color && <p><strong>Color:</strong> {product.color}</p>}
            {product.connectivity && <p><strong>Connectivity:</strong> {product.connectivity}</p>}
          </div>
        </div>
        <ProductActions product={product}/>
      </div>
    </div>
  
)
}

export default ProductGuide;