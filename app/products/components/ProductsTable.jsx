const tableContents = ["Id", "Product Name", "Category", "Price", "Availability", "Seller"];

export default function ProductsTable({ products }) {
    return (
        <div className="w-full">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full">
                    <thead className="bg-cyan-700 text-white">
                        <tr>
                            {tableContents.map((tableContent) =>
                                <th
                                    key={tableContent}
                                    className="text-left py-3 px-4 uppercase font-semibold"
                                >{tableContent}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {products?.map((product, index) => (
                            <tr
                                key={index}
                                className='border'
                            >
                                <td className="text-left py-3 px-4">
                                    <span className="hover:text-cyan-500">
                                        {product.product_id}
                                    </span>
                                </td>
                                <td className="text-left py-3 px-4 font-medium">
                                    {product.product_name}
                                </td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">
                                    {product.category}
                                </span>
                                </td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">${product.price}</span></td>
                                <td className="text-left py-3 px-4 font-medium">
                                    <span className={`${product.availability ? "text-green-500" : "text-red-500"} font-medium`}>{product.availability ? "Available" : "Out of Stock"}
                                    </span>
                                </td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{product.seller}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
