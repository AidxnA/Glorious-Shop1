import React from 'react'
import { Link } from 'react-router'

const Productcardinternal = ({products}) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
            <Link to={`/product/${products.slug}`}>
                <img src={products.image} alt={products.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4">
                    <h2 className="text-xl font-bold">{products.name}</h2>
                    <p className="text-gray-500">${products.price}</p>
                </div>
            </Link>
        </div>
  )
}

export default Productcardinternal