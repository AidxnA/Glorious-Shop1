const ProductCardSkeleton = () => {
    return (
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse">
            {/* Image placeholder */}
            <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200" />

            <div className="p-4 space-y-3">
                {/* Category tag */}
                <div className="h-3 w-16 bg-gray-100 rounded-full" />

                {/* Product title */}
                <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
                </div>

                {/* Rating row */}
                <div className="flex gap-1 items-center pt-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-3 w-3 bg-gray-150 rounded-sm bg-gray-100" />
                    ))}
                    <div className="h-3 w-8 bg-gray-100 rounded ml-1" />
                </div>

                {/* Price + button row */}
                <div className="flex items-center justify-between pt-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-md" />
                    <div className="h-9 w-28 bg-gray-200 rounded-xl" />
                </div>
            </div>
        </div>
    );
};


// Grid of skeletons matching Shop1's layout
const ProductSkeletonGrid = ({ count = 6 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(count)].map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
};

export { ProductCardSkeleton, ProductSkeletonGrid };