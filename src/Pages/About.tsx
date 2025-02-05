import gambar from '../assets/profile3.jpg';

export const About = () => {
    return (
        <section id="about" className="bg-secondary pt-2 ">
            <div>
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 px-4 lg:px-9">
                    <div className="relative mt-16 lg:mt-20 mb-20 w-[18rem] sm:w-[20rem] lg:w-[25rem] h-[28rem] sm:h-[20rem] lg:h-[29rem] shadow-lg  p-4 rounded-lg z-10">
                        <div className="absolute top-0 left-0 w-full h-full  -z-40 rounded-lg" style={{backgroundColor: '#FBF8EF'}}></div>
                        <div className="relative">
                            <img
                                src={gambar}
                                alt="Profile"
                                className="object-cover max-w-full w-full h-auto shadow-2xl border-8 border-white rounded-lg -rotate-12"
                            />
                        </div>
                    </div>


                    {/* Konten */}
                    <div className="w-full">
                        <div className="bg-slate-100 p-6 lg:p-10 rounded-lg mt-4 mb-6">
                            <div className="text-center">
                                <h1
                                    className="text-3xl sm:text-4xl font-bold text-sky-800 mb-4"
                                    style={{ fontFamily: "Rampart One" }}
                                >
                                    About Me !
                                </h1>
                            </div>
                            <p className="text-black text-sm sm:text-base mt-3">
                                I am a web developer who has a desire to learn and grow in the digital world.
                                <br /> This portfolio functions as a showcase for my work so far, even though it
                                is still relatively simple.
                            </p>
                            <table className="table-auto w-full mt-6 mb-8">
                                <tbody className="font-semibold text-black text-sm sm:text-lg">
                                    <tr>
                                        <th className="py-2 text-left">
                                            <h6>Name</h6>
                                        </th>
                                        <td className="px-2">:</td>
                                        <td className="font-medium py-2">Nadia Putri Rahmawati</td>
                                    </tr>
                                    <tr>
                                        <th className="py-2 text-left">
                                            <h6>Country</h6>
                                        </th>
                                        <td className="px-2">:</td>
                                        <td className="font-medium py-2">Indonesia</td>
                                    </tr>
                                    <tr>
                                        <th className="py-2 text-left">
                                            <h6>Email</h6>
                                        </th>
                                        <td className="px-2">:</td>
                                        <td className="font-medium py-2">
                                            Nadiaputrirahman@gmail.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="py-2 text-left">
                                            <h6>Education</h6>
                                        </th>
                                        <td className="px-2">:</td>
                                        <td className="font-medium py-2">
                                            Universitas Muhammadiyah Sukabumi
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2 className="text-center text-black font-medium text-base">
                                Thank You ✨
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
