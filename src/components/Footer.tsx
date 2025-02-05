import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-primary text-black pt-10 relative">
            <div className="absolute  left-1/2 transform -translate-x-1/2 bg-secondary border border-gray-300 rounded-2xl py-10 px-6 w-11/12 md:w-8/12 text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Need a website?<br /> Let's build it together!</h2>
                <button className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition">Get in touch</button>
            </div>
            <div className="bg-white text-black py-20 mt-40 lg:mt-24">
                <p className="text-center mb-6">Let's connect!</p>
                <div className="flex overflow-x-auto scrollbar-hidden gap-8 items-center lg:flex-wrap lg:justify-center whitespace-nowrap">
                    <a href="https://www.linkedin.com/in/nadia-putri-r" className="flex items-center gap-2">
                        <FaLinkedin size={30} />
                        Linkedin
                    </a>
                    <a href="https://www.instagram.com/ndiapttrrr?igsh=MWhpZjFweTIzaGY2YQ==" className="flex items-center gap-2">
                        <RiInstagramFill size={30} />
                        Instagram
                    </a>
                    <a href="mailto:nadiaputrirahman@gmail.com" className="flex items-center gap-2">
                        <MdEmail size={30} />
                        Email
                    </a>
                    <a href="https://github.com/nadiaputrirahmawati" className="flex items-center gap-2">
                        <FaGithub size={30} />
                        GitHub
                    </a>
                </div>

            </div>
            <div className="flex justify-center items-center p-3 text-sm text-gray-700">
                <p>© {new Date().getFullYear()} Nadia.P.R. All rights reserved.</p>
            </div>
        </footer>
    );
};
