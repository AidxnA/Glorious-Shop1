import { useEffect, useState } from "react";
import { productdata } from "./data";
import ProductCard from "./ProductCard";
import { fetchFeaturedProducts, fetchProducts } from "../Api/Api";

const Shop = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchFeaturedProducts()
            console.log('Fetched data:', data.items) // Log here to see what's returned
            setProducts(data.items)
        }
        getProducts()
    }, [])
    
    // Separate useEffect to log products when they change
    useEffect(() => {
        console.log('Products state:', products)
    }, [products])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products && products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;