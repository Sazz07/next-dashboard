'use client'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const menu = [
    { name: 'Users', href: '/users' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' }
]


export default function LeftSidebar() {
    const pathName = usePathname();
    const [expand, setIsExpand] = useState(false);

    return (
        <aside className='w-full md:w-72 h-full md:h-screen md:sticky md:top-0 bg-gray-50 md:bg-gray-100 pt-5 border-r'>
            <Link href={'/'}>
                <h1 className="text-center text-2xl font-bold">Dashboard</h1>
            </Link>
            <div className="pt-2">
                <ul className="flex flex-row md:flex-col gap-3 justify-center px-2">
                    {menu.map((item, index) => (
                        <li
                            key={index}
                        >
                            <Link href={item.href}
                                className={`p-3 rounded ${pathName === item.href ? 'bg-gray-300 text-cyan-700' : 'hover:bg-gray-300 hover:text-cyan-700'} font-medium cursor-pointer hidden md:block`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-3 md:hidden">
                <button onClick={() => setIsExpand(!expand)}
                    className="w-full bg-transparent text-cyan-600 border-2 border-cyan-600 font-medium rounded-lg text-sm px-5 py-3 flex items-center justify-between"
                    type="button"
                >
                    {pathName === "/" ? "Dashboard" : pathName === "/users" ? "Users" : pathName === "/products" ? "Products" : "About"}
                    <ChevronDownIcon className="h-5 w-5" />
                </button>

                <div className={`z-10 ${expand ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}>
                    <ul className="text-sm text-gray-700">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link
                                    onClick={() => setIsExpand(!expand)}
                                    href={item.href}
                                    className={`block px-4 py-2 ${pathName === item.href
                                        ? " hover:bg-teal-100 bg-teal-100"
                                        : "hover:bg-gray-50"
                                        }  text-teal-700 `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
