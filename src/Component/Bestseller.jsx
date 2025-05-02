import React from 'react';
import bgImg from './photos/cinema.jpg'; // Replace with your actual background image

const Bestseller = () => {
  return (
    <section className="relative bg-white py-14 px-4 md:px-12 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-[Amita] font-bold text-white text-center mb-2">
          <span className="inline-block w-12 h-[2px] bg-white mr-3 align-middle" />
          ताज़ा, ट्रेंडी ,टॉप - Our bestsellers
          <span className="inline-block w-12 h-[2px] bg-white ml-3 align-middle" />
        </h2>

        <p className="text-center text-white font-[Amita] text-sm md:text-base mb-10">
          Get your hands on our bestseller you can’t say no
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={bgImg}
              alt="Cinema Art"
              className="w-full h-[350px] object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-[Amita] font-semibold mb-1 text-gray-800">Classic Cinema</h3>
              <p className="text-sm font-[Amita] text-gray-500 mb-2">Canvas Print | By Kaarigar&co</p>
              <div className="text-center mt-2">
                <a
                  href="/Bestsellerpage"
                  className="group relative inline-flex items-center justify-center px-6 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white"
                >
                  {/* Animated background fill */}
                  <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                  {/* Button text */}
                  <span className="relative z-10">EXPLORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;