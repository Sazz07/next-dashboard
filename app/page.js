import Tables from "@/components/Tables/Tables";

const adminDashboard = {
  "admin_id": "A101",
  "username": "admin123",
  "email": "admin123@example.com",
  "full_name": "Admin One",
  "role": "Super Admin",
  "sales": [
    {
      "order_id": "ORD101",
      "product_id": "P101",
      "product_name": "Smartphone",
      "quantity": 3,
      "total_price": 1499.97,
      "order_date": "2023-08-15"
    },
    {
      "order_id": "ORD102",
      "product_id": "P105",
      "product_name": "Bluetooth Speaker",
      "quantity": 2,
      "total_price": 159.98,
      "order_date": "2023-08-16"
    }
  ],
  "revenue": {
    "total_sales": 10,
    "total_revenue": 1999.95
  },
  "top_selling_products": [
    {
      "product_id": "P101",
      "product_name": "Smartphone",
      "total_quantity_sold": 5
    },
    {
      "product_id": "P103",
      "product_name": "Running Shoes",
      "total_quantity_sold": 4
    }
  ]
};

const { top_selling_products } = adminDashboard;
console.log(top_selling_products);
export default function Home() {
  return (
    <main>
      <section className="p-8">
        <h1 className="text-4xl font-semibold mb-4">Dashboard</h1>
        <aside className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          {/* Sales Section */}
          <div className="bg-white p-4 rounded shadow-lg lg:col-span-8">
            <h2 className="text-xl font-semibold py-2">Recent Sales: {(adminDashboard?.sales).length}</h2>
            {/* recent sales start*/}
            {adminDashboard?.sales.map((sale) =>
              <div
                className="bg-white p-4 rounded border mb-4"
                key={sale.order_id}
              >
                <div>
                  <h1 className="text-xl font-bold">{sale.product_name}</h1>
                  <p className="text-lg text-cyan-600 font-semibold">${sale.total_price}</p>
                </div>
              </div>
            )}
            {/* recent sales end*/}
          </div>

          {/* Revenue Section */}
          <div className="bg-white p-4 rounded shadow-lg lg:col-span-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Revenue:</h2>
              <p className="text-base font-semibold">Total Sales - {adminDashboard.revenue.total_sales}</p>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="border-double border-4 w-32 h-32 border-cyan-600 rounded-full flex items-center justify-center mb-4 lg:mb-0">
                <p className="font-semibold text-xl">${Math.trunc(adminDashboard.revenue.total_revenue)}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Top Selling Products Section */}
        <div className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Top Selling Products</h2>
          <Tables
            top_selling_products={top_selling_products}
          ></Tables>
        </div>
      </section>
    </main>
  )
}
