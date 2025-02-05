import React from "react";
import profile from "../assets/profile2.jpg";
import Navbar from "../components/Navbar";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-primary py-0 px-4 md:px-16 lg:px-32 min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="bg-secondary mb-0 flex-1 flex items-center justify-center mt-52" style={{ borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem' }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20 p-6 md:p-24">
          <div className="w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-96 xl:h-72 rounded-full shadow-lg mb-6 md:mb-0 mt-[-8rem] md:mt-[-22rem] flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>


          <div className="text-center lg:text-left pt-2 mt-[-5rem] md:mt-[-5rem]">
            <h3 className="text-gray-600 font-bold text-xl mb-3">Beginner Web Developer </h3>
            <h1 className="lg:text-6xl md:text-5xl text-4xl mt-4 font-bold text-blue-950 tracking-tighter-[4rem]" style={{ fontFamily: "Telegraf" }}>
              Welcome To <br /> My  Portofolio
            </h1>
            <p className=" text-black text-sm flex items-center gap-2 mt-4">
              <span className="font-normal text-black text-lg">I am a web developer who has a desire to learn and grow in the<br /> in the digital world.</span>
            </p>
            <button className="w-40 bg-blue-950 rounded-full text-white p-2 font-semibold mt-6">Learn More</button>
          </div>
        </div>
      </div>




    </section>
  );
};

export default Hero;
