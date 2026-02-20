import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { getProductBySlug } from '../Api/Api';



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
  
        {/* Right: Extra Info Panel */}
        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow text-sm text-gray-800">
          {slug === "gpbt-zero-one-keycaps" && (
            <>
              <h2 className="text-lg font-semibold mb-2">Status Report</h2>
              <p className="mb-4 italic text-purple-700">
                Third Impact is imminent. Mission: Acquire GPBT Zero One. Warning: Supplies extremely limited. Just put them in the basket, Shinji.
              </p>
              <ul className="space-y-2">
                <li> Free Shipping on Contiguous US Orders $99.99+</li>
                <li> One Year Warranty</li>
                <li> Limited Edition products are final sale</li>
                <li> <button className="bg-yellow-400 px-3 py-1 rounded text-black">Notify When Available</button></li>
              </ul>
            </>
          )}

          {slug === "gmbk-75-keyboard" && (
            <>
              <h2 className="text-lg font-semibold mb-2">Keyboard Highlights</h2>
              <p className="mb-4 text-blue-700">
                Built to outlast the competition and packed with customization options. Affordable doesn’t have to mean dull.
              </p>
              <ul className="space-y-2">
                <li> Compact 75% Layout</li>
                <li> RGB Backlighting</li>
                <li> One Year Warranty</li>
                <li> Currently Out of Stock</li>
                <li> <button className="bg-yellow-400 px-3 py-1 rounded text-black">Notify When Available</button></li>
              </ul>
            </>
          )}

          {slug === "model-o3-wireless" && (
            <>
              <h2 className="text-lg font-semibold mb-2">InfinitePlay Features</h2>
              <p className="mb-4 text-blue-700">
                The first true wireless gaming mouse you never need to plug in. Includes hotswappable batteries, 8K Hz polling, and a 30K DPI sensor.
              </p>
              <ul className="space-y-2">
                <li> Wireless Connectivity</li>
                <li> Hotswappable Batteries</li>
                <li> 30K DPI Sensor</li>
                <li> Buy at Best Buy</li>
              </ul>
            </>
          )}
        </div>
  
      </div>
    </div>
  )
}

export default ProductGuide;