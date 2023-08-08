"use client"
import { useState } from "react";
import ProductsTable from "./components/ProductsTable";
import ProductTabs from "./components/ProductTabs";
import ProductsCard from "./components/ProductsCard";

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
    // Add more product objects here...
];

const categories = [
    { name: "All" },
    { name: "Electronics" },
    { name: "Sports & Outdoors" },
    { name: "Fashion" }
];


export default function Products() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section>
            <header>
                <h1 className='text-4xl font-bold'>{activeCategory} products- {filteredProducts.length}</h1>
            </header>
            <div className='my-4'>
                <div className="flex gap-2 mb-2">
                    {categories.map((category) =>
                        <ProductTabs
                            key={category.name}
                            category={category}
                            activeCategory={activeCategory}
                            onClick={() => setActiveCategory(category.name)}
                        >{category.name}
                        </ProductTabs>
                    )}
                </div>
                <div className="hidden lg:block">
                    <ProductsTable products={filteredProducts}></ProductsTable>
                </div>
                {/* Products Card Start */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:hidden">
                    {filteredProducts.map((product, index) =>
                        <ProductsCard
                            key={index}
                            product={product}
                        >
                        </ProductsCard>)}
                    {/* Products Card End */}
                </div>
            </div>
        </section>
    )
}
