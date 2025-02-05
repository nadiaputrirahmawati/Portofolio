import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';

interface Category {
    id_category: string;
    name: string;
    information: string;
    icons: string;
}

const ImageSlider: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    // Fetch data from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/category/data");
                if (response.data.success) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.error("There was an error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="bg-slate-100">
            <div className="relative w-full py-4 lg:py-10 md:px-16 lg:px-32">
                <h1 className='text-center mb-10 font-bold text-4xl text-sky-800' style={{ fontFamily: "Rampart One" }}>
                    My - Skill
                </h1>
                <div className="w-full mx-auto relative">
                    <button
                        className="custom-prev-button hidden md:flex absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        {/* Add your icon for prev button */}
                    </button>
                    <button
                        className="custom-next-button hidden md:flex absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
                        aria-label="Next slide"
                    >
                        {/* Add your icon for next button */}
                    </button>

                    {/* Swiper */}
                    <Swiper
                        slidesPerView={1} // Show only one slide on mobile by default
                        centeredSlides={true} // Center the slides
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: '.custom-next-button',
                            prevEl: '.custom-prev-button',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1, // On mobile, show one slide
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5, // On larger screens, show 5 slides
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="w-full"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id_category} className="w-full flex justify-center lg:ml-0 ml-3">
                                <div className="bg-secondary rounded-t-full text-center w-60 mb-4 lg:w-48 shadow-xl h-56">
                                    <div className="flex justify-center items-center mb-4">
                                        <img
                                            src={`http://127.0.0.1:8000/storage/${category.icons}`}
                                            className="w-16 h-16 object-contain mt-10"
                                            alt={category.name}
                                        />
                                    </div>
                                    <h1 className="p-2 text-black">{category.name}</h1>
                                    <h1 className="p-2 text-black">{category.information}</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
