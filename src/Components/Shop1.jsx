import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchFeaturedProducts } from "../Api/Api";
import { ProductSkeletonGrid } from "./Productcardskeleton";

const Shop1 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchFeaturedProducts();
                setProducts(data?.items ?? []);
            } catch (err) {
                setError("Failed to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    if (loading) return <ProductSkeletonGrid count={6} />;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.fields.slug} product={product.fields} />
            ))}
        </div>
    );
};

export default Shop1;