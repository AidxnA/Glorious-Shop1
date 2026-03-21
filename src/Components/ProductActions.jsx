import { useState } from 'react';
import useCartStore from '../../Context/Statecontext';




export default function ProductActions({ product }) {
  const [qty, setQty] = useState(1);

  const addItem = useCartStore((s) => s.addItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const incQty = () => setQty(prev => prev + 1);
  const decQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addItem(product);               // adds product with quantity: 1
    if (qty > 1) {
      updateQuantity(product.id, qty); // updates to the chosen qty if more than 1
    }
    setQty(1);                      // reset selector
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={decQty}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-2 font-medium border-x border-gray-300">
            {qty}
          </span>
          <button
            onClick={incQty}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}