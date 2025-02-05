import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import api from "../Service/api"; // Import the configured axios instance

interface PortfolioItem {
    id_portofolio: string;
    category: {
        name: string;
    };
    title: string;
    descriptions: string;
    url: string;
    image: string;
    slug: string;
}

interface Category {
    id_category: string;
    name: string;
    information: string;
    icons: string;
}

const Portfolio: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [filter, setFilter] = useState<string>("All");

    // Fetch portfolio items data from API
    useEffect(() => {
        const fetchPortfolioItems = async () => {
            try {
                const response = await api.get("portfolio/data"); // Corrected API path
                console.log(response.data); // Check the response structure
                if (response.data.success) {
                    setPortfolioItems(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };

        fetchPortfolioItems(); // Call function to fetch portfolio data
    }, []); // Empty dependency array means this effect runs once on mount

    // Fetch categories data from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("category/data"); // Corrected API path
                if (response.data.success) {
                    setCategories(response.data.data); // Save category data to state
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories(); // Call function to fetch category data
    }, []); // Empty dependency array to fetch categories once

    // Filter portfolio items based on selected category
    const filteredItems = filter === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category.name === filter);

    return (
        <section id="portfolio" className="h-full bg-primary pb-28">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-center mb-10 font-bold text-4xl text-sky-800" style={{ fontFamily: "Rampart One" }}>
                    My - Portfolio
                </h1>

                <div className="flex justify-center mb-6">
                    <div className="flex space-x-4 overflow-x-auto scrollbar-hidden lg:flex-wrap lg:justify-center">
                        {["All", ...categories.map(category => category.name)].map((category) => (
                            <button
                                key={category}
                                className={`px-2 py-2 rounded-full w-auto lg:w-32 ${filter === category
                                        ? "bg-blue-400 text-white"
                                        : "bg-slate-100 border-secondary border-2 text-gray-700"
                                    } hover:bg-secondary`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.length === 0 ? (
                        <p>No portfolio items available.</p>
                    ) : (
                        filteredItems.map((item) => (
                            <div
                                key={item.id_portofolio}
                                className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                {/* Gambar */}
                                <img
                                    src={`https://adminportfolio.nadp.my.id/storage/${item.image}`} // Path gambar
                                    alt={item.title}
                                    className="w-full h-auto object-cover"
                                />

                                <div className="group-hover:opacity-100 absolute inset-0 mt-24 gap-4 ml-6 mr-6 bg-white bg-opacity-95 flex p-4 opacity-0 h-20 transition-opacity duration-300">
                                    <h2 className="text-xl font-bold mb-2 text-slate-600 w-60">{item.title}</h2>
                                    <a href={item.url} className="text-black">
                                        <FaLink size={22} />
                                    </a>
                                    <a href={`project/${item.slug}`} className="text-black">
                                        <FaPlus size={22} />
                                    </a>

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
