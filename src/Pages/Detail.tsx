import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../Service/api";
import gambar from "../assets/profile2.jpg";

interface PortfolioDetail {
    title: string;
    created_at: string;
    image: string;
    url: string;
    category?: { name: string };
    descriptions: string;
}

const Detail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [portfolioDetail, setPortfolioDetail] = useState<PortfolioDetail | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPortfolioDetail = async () => {
            try {
                const response = await api.get(`portfolio/detail/${slug}`);
                if (response.data.success) {
                    setPortfolioDetail(response.data.data);
                } else {
                    setError("Data tidak ditemukan.");
                }
            } catch (error) {
                setError("Gagal mengambil data. Silakan coba lagi.");
                console.error("Error fetching portfolio details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPortfolioDetail();
        }

        // Import CSS hanya saat halaman ini diakses
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "../style.css"; // Pastikan path-nya sesuai
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [slug]);

    if (loading) {
        return <div className="text-center mt-10 text-gray-700">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">{error}</div>;
    }

    return (
        <>
            <Navbar />
            <div className="bg-slate-50 min-h-screen pt-20 px-4 md:px-16 lg:px-20 flex flex-col lg:flex-row lg:items-start">
                {/* Bagian kiri */}
                <div className="w-full lg:w-1/3 lg:pr-4 lg:fixed mt-10">
                    <h1 className="text-black text-lg">Hi, Everyone 🙌</h1>
                    <div className="flex justify-start mt-4 space-x-5">
                        <img
                            src={gambar}
                            alt="Profile"
                            className="w-16 h-16 rounded-full  object-cover"
                        />
                        <div className="mt-1">
                            <h3 className="text-black text-lg mb-1"> Nadia Putri Rahmawati</h3>
                            <h6 className="text-gray-700 text-sm">
                                Published on {new Date(portfolioDetail?.created_at ?? "").toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </h6>
                        </div>
                    </div>
                    {/* <h3 className="text-black font-bold text-3xl mt-3 text-center">{portfolioDetail?.title}</h3> */}
                    <div className="flex justify-center items-center mt-5">
                        {portfolioDetail?.image && (
                            <img
                                src={`https://adminportfolio.nadp.my.id/storage/${portfolioDetail.image}`}
                                alt={portfolioDetail.title}
                                className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
                            />
                        )}
                    </div>




                    <h1 className="text-black text-xl font-semibold mt-4">
                        Website:{" "}
                        <a
                            href={portfolioDetail?.url}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {portfolioDetail?.url}
                        </a>
                    </h1>
                </div>

                {/* Bagian kanan */}
                <div className="w-full lg:w-7/12 lg:ml-auto mt-10 lg:mt-0 mb-10">
                    <div className="px-4 text-black">
                        <div className="border border-gray-500 p-6 w-full rounded-lg shadow-md">
                            <h1 className="text-lg bg-stone-300 w-36 text-center rounded-full text-black font-bold">
                                {portfolioDetail?.category?.name}
                            </h1>
                            <p className="text-justify mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: portfolioDetail?.descriptions ?? "" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
