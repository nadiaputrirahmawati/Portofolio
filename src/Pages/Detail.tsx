import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../Service/api";

const Detail: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();
    const [portfolioDetail, setPortfolioDetail] = useState<any>(null);

    useEffect(() => {
        const fetchPortfolioDetail = async () => {
            try {
                const response = await api.get(`portfolio/detail/${slug}`);
                if (response.data.success) {
                    setPortfolioDetail(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching portfolio details:", error);
            }
        };

        if (slug) {
            fetchPortfolioDetail();
        }
    }, [slug]);

    if (!portfolioDetail) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navbar />
            <div className="bg-slate-50 pt-20 px-4 md:px-16 lg:px-20 flex flex-col lg:flex-row lg:items-start">
                {/* Bagian kiri (mobile: di atas, desktop: di kiri) */}
                <div className="w-full lg:w-1/3 lg:pr-12 lg:fixed lg:h-screen mt-10">
                    <h1 className="text-black text-lg">Hi, Everyone 🙌</h1>
                    <h1 className="text-black text-md">
                        Published on {new Date(portfolioDetail.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </h1>
                    <h1 className="text-black font-bold text-4xl mt-3">
                        {portfolioDetail.title}
                    </h1>
                    <div className="flex justify-center items-center mt-5">
                        <img
                            src={`https://adminportfolio.nadp.my.id/storage/${portfolioDetail.image}`}
                            alt={portfolioDetail.title}
                            className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
                        />
                    </div>
                    <h1 className="text-black text-xl font-semibold mt-4">
                        Website: <a
                            href={portfolioDetail.url}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {portfolioDetail.url}
                        </a>
                    </h1>
                </div>
                <div className="card w-full lg:w-7/12 lg:ml-auto h-screen pr-4 mt-10 lg:mt-10 mb-10">
                    <div className="px-4 text-black">
                        <div className="border border-gray-500 p-6 w-full rounded-lg shadow-md">
                            <div>
                                <h1 className="text-lg bg-secondary w-14 text-center rounded-full text-white">
                                    {portfolioDetail.category.name}
                                </h1>
                                <p className="text-justify text-sm mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: portfolioDetail.descriptions }} />

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Detail;