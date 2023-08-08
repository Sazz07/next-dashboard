import Tables from "@/components/Tables/Tables";
import { UserGroupIcon } from "@heroicons/react/24/outline"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

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

const users = [
  {
    "user_id": "U101",
    "username": "shopper123",
    "email": "shopper123@example.com",
    "full_name": "John Doe",
    "age": 28,
    "date_of_birth": "1995-03-15",
    "phone": "555-123-4567",
    "address": "123 Main St, Cityville",
    "is_shopper": true,
    "is_seller": false
  },
  {
    "user_id": "U102",
    "username": "seller456",
    "email": "seller456@example.com",
    "full_name": "Emily Johnson",
    "age": 31,
    "date_of_birth": "1990-09-22",
    "phone": "555-987-6543",
    "address": "456 Elm Ave, Townsville",
    "is_shopper": false,
    "is_seller": true
  },
  {
    "user_id": "U103",
    "username": "avidreader",
    "email": "reader@example.com",
    "full_name": "Alice Smith",
    "age": 33,
    "date_of_birth": "1988-07-10",
    "phone": "555-222-3333",
    "address": "789 Oak Rd, Villageton",
    "is_shopper": true,
    "is_seller": false
  },
  {
    "user_id": "U104",
    "username": "techwizard",
    "email": "tech@example.com",
    "full_name": "Michael Brown",
    "age": 36,
    "date_of_birth": "1985-01-20",
    "phone": "555-444-5555",
    "address": "101 Maple Ave, Techville",
    "is_shopper": true,
    "is_seller": true
  },
  {
    "user_id": "U105",
    "username": "fitnessguru",
    "email": "fitness@example.com",
    "full_name": "Sarah Williams",
    "age": 29,
    "date_of_birth": "1992-12-05",
    "phone": "555-777-8888",
    "address": "202 Gym Street, Fitville",
    "is_shopper": true,
    "is_seller": false
  },
  {
    "user_id": "U106",
    "username": "artlover",
    "email": "art@example.com",
    "full_name": "Daniel Miller",
    "age": 26,
    "date_of_birth": "1997-06-28",
    "phone": "555-666-9999",
    "address": "303 Canvas Rd, Artsburg",
    "is_shopper": true,
    "is_seller": false
  }
];

const products = [
  {
    "product_id": "P101",
    "product_name": "Smartphone",
    "category": "Electronics",
    "price": 499.99,
    "availability": true,
    "seller": "ElectroTech",
    "ratings": 4.5,
    "reviews": 120
  },
  {
    "product_id": "P102",
    "product_name": "Laptop",
    "category": "Electronics",
    "price": 899.99,
    "availability": true,
    "seller": "TechHub",
    "ratings": 4.2,
    "reviews": 80
  },
  {
    "product_id": "P103",
    "product_name": "Running Shoes",
    "category": "Sports & Outdoors",
    "price": 79.99,
    "availability": false,
    "seller": "Sportify",
    "ratings": 4.7,
    "reviews": 200
  },
  {
    "product_id": "P104",
    "product_name": "Graphic T-Shirt",
    "category": "Fashion",
    "price": 29.99,
    "availability": true,
    "seller": "UrbanStyle",
    "ratings": 4.0,
    "reviews": 50
  },
  {
    "product_id": "P105",
    "product_name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 79.99,
    "availability": true,
    "seller": "AudioTech",
    "ratings": 4.6,
    "reviews": 150
  },
  {
    "product_id": "P106",
    "product_name": "Yoga Mat",
    "category": "Sports & Outdoors",
    "price": 19.99,
    "availability": true,
    "seller": "FitGear",
    "ratings": 4.3,
    "reviews": 90
  },
  {
    "product_id": "P107",
    "product_name": "Wireless Earbuds",
    "category": "Electronics",
    "price": 59.99,
    "availability": true,
    "seller": "SoundWave",
    "ratings": 4.4,
    "reviews": 100
  },
  {
    "product_id": "P108",
    "product_name": "Dress Shoes",
    "category": "Fashion",
    "price": 89.99,
    "availability": true,
    "seller": "ElegantStyles",
    "ratings": 4.1,
    "reviews": 70
  },
  {
    "product_id": "P109",
    "product_name": "Mountain Bike",
    "category": "Sports & Outdoors",
    "price": 399.99,
    "availability": true,
    "seller": "AdventureSports",
    "ratings": 4.8,
    "reviews": 300
  },
  {
    "product_id": "P110",
    "product_name": "Gaming Console",
    "category": "Electronics",
    "price": 349.99,
    "availability": false,
    "seller": "GameZone",
    "ratings": 4.5,
    "reviews": 180
  },
  {
    "product_id": "P111",
    "product_name": "Casual Jeans",
    "category": "Fashion",
    "price": 39.99,
    "availability": true,
    "seller": "DenimStyle",
    "ratings": 4.2,
    "reviews": 60
  },
  {
    "product_id": "P112",
    "product_name": "Fitness Tracker",
    "category": "Electronics",
    "price": 49.99,
    "availability": true,
    "seller": "FitTech",
    "ratings": 4.6,
    "reviews": 120
  },
  {
    "product_id": "P113",
    "product_name": "Soccer Ball",
    "category": "Sports & Outdoors",
    "price": 14.99,
    "availability": true,
    "seller": "SportsGear",
    "ratings": 4.3,
    "reviews": 50
  },
  {
    "product_id": "P114",
    "product_name": "Designer Handbag",
    "category": "Fashion",
    "price": 199.99,
    "availability": true,
    "seller": "LuxuryBoutique",
    "ratings": 4.7,
    "reviews": 220
  },
  {
    "product_id": "P115",
    "product_name": "Portable Blender",
    "category": "Home & Kitchen",
    "price": 34.99,
    "availability": true,
    "seller": "BlendMaster",
    "ratings": 4.4,
    "reviews": 70
  },
  {
    "product_id": "P116",
    "product_name": "Hiking Backpack",
    "category": "Sports & Outdoors",
    "price": 69.99,
    "availability": false,
    "seller": "ExploreOutdoors",
    "ratings": 4.5,
    "reviews": 90
  },
  {
    "product_id": "P117",
    "product_name": "Elegant Watch",
    "category": "Fashion",
    "price": 149.99,
    "availability": false,
    "seller": "TimelessStyle",
    "ratings": 4.1,
    "reviews": 120
  },
  {
    "product_id": "P118",
    "product_name": "Wireless Mouse",
    "category": "Electronics",
    "price": 24.99,
    "availability": true,
    "seller": "TechEssentials",
    "ratings": 4.2,
    "reviews": 40
  },
  {
    "product_id": "P119",
    "product_name": "Camping Tent",
    "category": "Sports & Outdoors",
    "price": 129.99,
    "availability": false,
    "seller": "NatureGear",
    "ratings": 4.6,
    "reviews": 150
  },
  {
    "product_id": "P120",
    "product_name": "Stylish Sunglasses",
    "category": "Fashion",
    "price": 39.99,
    "availability": true,
    "seller": "SunStyle",
    "ratings": 4.3,
    "reviews": 80
  }
];

const { top_selling_products } = adminDashboard;
export default function Home() {
  return (
    <main>
      <section className="p-8">
        <h1 className="text-4xl font-semibold mb-5">Dashboard</h1>
        <aside className="grid md:grid-cols-2 gap-5 md:gap-10 mb-10">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex flex-wrap items-center justify-between py-14 px-7">
              <h1 className="text-2xl font-bold">Users - {users.length}</h1>
              <span className="bg-amber-600 rounded-full p-2 hover:bg-amber-700 cursor-pointer">
                <UserGroupIcon className="w-8 h-8 text-gray-100" />
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex flex-wrap items-center justify-between py-14 px-7">
              <h1 className="text-2xl font-bold">Products - {products.length}</h1>
              <span className="bg-cyan-600 rounded-full p-2 hover:bg-cyan-700 cursor-pointer">
                <ShoppingBagIcon className="w-8 h-8 text-gray-100" />
              </span>
            </div>
          </div>
        </aside>
        <aside className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 mb-10">
          {/* Sales Section */}
          <div className="bg-white p-4 rounded shadow-lg lg:col-span-8">
            <h2 className="text-xl font-semibold py-2">Recent Sales: {(adminDashboard?.sales).length}</h2>
            {/* recent sales start*/}
            {adminDashboard?.sales.map((sale) =>
              <div
                className="bg-white p-4 rounded border my-2"
                key={sale.order_id}
              >
                <article>
                  <h1 className="text-xl font-bold">{sale.product_name}</h1>
                  <p className="text-lg text-cyan-600 font-semibold">${sale.total_price}</p>
                </article>
              </div>
            )}
            {/* recent sales end*/}
          </div>

          {/* Revenue Section */}
          <div className="bg-white p-4 rounded shadow-lg lg:col-span-4">
            <article className="flex flex-wrap items-center justify-between">
              <h2 className="text-xl font-semibold">Revenue:</h2>
              <p className="text-base font-semibold">Total Sales - {adminDashboard.revenue.total_sales}</p>
            </article>
            <div className="h-full w-full flex items-center justify-center">
              <div className="border-double border-4 w-32 h-32 border-cyan-600 rounded-full flex items-center justify-center mb-10 lg:mb-0">
                <p className="font-semibold text-xl">${Math.trunc(adminDashboard.revenue.total_revenue)}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Top Selling Products Section */}
        <aside className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Top Selling Products</h2>
          <Tables
            top_selling_products={top_selling_products}
          ></Tables>
        </aside>
      </section>
    </main>
  )
}
