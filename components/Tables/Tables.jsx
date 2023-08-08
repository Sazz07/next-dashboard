const tableHead = ["product id", "product name", "Quantity Sold"];

export default function Tables({ top_selling_products }) {
    console.log(top_selling_products);
    return (
        <div className="w-full">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full">
                    <thead className="bg-cyan-700 text-white">
                        <tr className="border">
                            {tableHead.map((tableContent) =>
                                <th
                                    key={tableContent}
                                    className="text-left py-3 px-4 uppercase font-semibold">
                                    {tableContent}
                                </th>)}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {top_selling_products.map((product, index) => (
                            <tr
                                key={index}
                                className='border'
                            >
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{product.product_id}</span></td>
                                <td className="text-left py-3 px-4 font-medium">{product.product_name}</td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500 text-green-600 font-medium">{product.total_quantity_sold}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
