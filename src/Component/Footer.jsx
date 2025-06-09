import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaDribbble } from 'react-icons/fa';
import logo from './photos/Logo.jpeg'; // Replace with your logo path

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] text-gray-800 py-24 px-6 md:px-20"
    >
      {/* Visual Layer: Floating SVG or Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-pink-200 rounded-full mix-blend-overlay opacity-20 blur-3xl left-[-200px] top-[-400px]"></div>
        <div className="absolute w-[700px] h-[700px] bg-blue-200 rounded-full mix-blend-overlay opacity-20 blur-2xl right-[-150px] bottom-[-300px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo + Quote */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <div className="text-center md:text-left max-w-md">
            <img src={logo} alt="Logo" className="w-36 mb-6 mx-auto md:mx-0" />
            <p className="text-sm font-light leading-relaxed text-gray-600">
              "Every brushstroke tells a story. Every detail crafted with soul. Our art isn't just visual, it's an experience."
            </p>
          </div>

          {/* Subscribe */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3">Stay in the Loop</h4>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-full shadow-sm w-full sm:w-auto"
              />
              <button className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation + Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-base mb-3">Explore</h5>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="hover:text-black cursor-pointer transition">Gallery</li>
              <li className="hover:text-black cursor-pointer transition">Best Sellers</li>
              <li className="hover:text-black cursor-pointer transition">Custom Orders</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-semibold text-base mb-3">Company</h5>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="hover:text-black cursor-pointer transition">About Us</li>
              <li className="hover:text-black cursor-pointer transition">Careers</li>
              <li className="hover:text-black cursor-pointer transition">Press</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-semibold text-base mb-3">Follow Us</h5>
            <div className="flex justify-center md:justify-start gap-5 text-lg text-gray-600">
              <a href="#" className="hover:text-black transition"><FaInstagram /></a>
              <a href="#" className="hover:text-black transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-black transition"><FaTwitter /></a>
              <a href="#" className="hover:text-black transition"><FaDribbble /></a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Kaarigar Studios · Crafted with Soul & Motion.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;