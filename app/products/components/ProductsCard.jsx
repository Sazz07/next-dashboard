import React from 'react'

export default function ProductsCard({ product }) {
    return (
        <div key={product.product_id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">{product.product_name}</h2>
            <p className="text-gray-700">{product.category}</p>
            <p className={`${product.availability ? "text-green-500" : "text-red-500"} font-medium`}>{product.availability ? 'Available' : 'Out of Stock'}</p>
            <p className="text-gray-900 font-semibold">${product.price}</p>
        </div>
    )
}
