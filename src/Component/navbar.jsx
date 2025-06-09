// import { useState } from 'react';
// import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import logo from './photos/logo.jpeg'; // Replace with circular icon if needed
// import Jua from './photos/Jua.jpg';
// import Madira from './photos/madira1.png';
// import music from './photos/music.png';
// import cinema from './photos/cinema.jpg';
// import baklol from './photos/baklol.png';
// import canvas from './photos/bg1.jpeg';
// import { Link } from 'react-router-dom';
// const categories = [
//   { name: "Jua Premi", image: Jua, link: "/Juapremi" },
//   { name: "Motor Premi", image: Madira, link: "/Gaadi" },
//   { name: "Madira Premi", image: music, link: "/Madira" },
//   { name: "Cinema Premi", image: cinema, link: "/Cinemapremi" },
//   { name: "Aesthetics premi", image: baklol, link: "/Aestheticspremi" },
//   { name: "Pencil Premi", image: Jua, link: "/Pencilpremi" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//     {/* Moving Offer Bar */}
//     <div className="w-full bg-slate-300 text-black text-sm font-semibold py-2 overflow-hidden relative z-50">
//   <div className="animate-marquee whitespace-nowrap px-6">
//     🔥 Flat 20% OFF on all items! Use code: <strong>KAARIGAR20</strong>
//   </div>
// </div>
//     <nav
//     className="w-full font-serif text-[#2E2B28] relative z-50 bg-cover bg-center"
//     style={{ backgroundImage: `url(${canvas})` }}
//   >
//       {/* Top Row */}
//       <div className="flex justify-between items-center px-6 py-4 border-b">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-28 w-28 rounded-2xl border p-1 object-cover"
//           />
//         </div>

//         {/* Brand Name */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <h1 className="text-4xl font-[Amita] lg:text-5xl font-semibold tracking-widest uppercase">
//             Kaarigar & Co.
//           </h1>
//           <p className="text-xs font-[Amita] tracking-wider">Timeless . Heartfelt . Kaarigar</p>
//         </div>

//         {/* Icons */}
//         <div className="flex gap-4 text-xl">
//           <FaSearch className="cursor-pointer hover:scale-105 transition-transform" />
//           <FaUser className="cursor-pointer hover:scale-105 transition-transform" />
//           <FaHeart className="cursor-pointer hover:scale-105 transition-transform" />
//           <div className="relative cursor-pointer">
//             <FaShoppingCart />
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//               0
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div className="flex justify-center items-center py-4 font-[Amita] border-t border-b text-sm tracking-wider relative">
//         <div className="flex items-center space-x-10">
//         <Link to="/" className="cursor-pointer hover:underline">Home</Link>

//           {/* Categories with Dropdown */}
//           <div className="relative">
//             <span
//               className="cursor-pointer hover:underline"
//               onClick={() => setOpen(!open)}
//             >
//               Categories
//             </span>

//             {open && (
//               <div className="absolute left-1/2 -translate-x-1/2 top-10 mt-2 w-[360px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-50">
//                 <div className="grid grid-cols-3 gap-4">
//                   {categories.map((category) => (
//                     <a
//                       key={category.name}
//                       href={category.link}
//                       className="flex flex-col items-center cursor-pointer group"
//                     >
//                       <div className="w-20 h-20 rounded-full overflow-hidden relative group-hover:scale-105 transition-transform">
//                         <img
//                           src={category.image}
//                           alt={category.name}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                           <span className="text-white text-[10px] font-bold">
//                             {category.name}
//                           </span>
//                         </div>
//                       </div>
//                       <span className="mt-1 text-gray-700 text-xs font-semibold">
//                         {category.name}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex space-x-6 text-sm font-semibold text-gray-700">
//             <a href="/Original" className="cursor-pointer hover:underline">Kaarigar Original</a>
//             <a href="/shop" className="cursor-pointer hover:underline">SHOP</a>
//             <a href="/Journey" className="cursor-pointer hover:underline">The Journey</a>
//             <a href="/Contact" className="cursor-pointer hover:underline">CONTACT</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./photos/logo.jpeg";
import Jua from "./photos/Jua.jpg";
import Madira from "./photos/madira1.png";
import music from "./photos/music.png";
import cinema from "./photos/cinema.jpg";
import baklol from "./photos/baklol.png";
import canvas from "./photos/bg1.jpeg";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Jua Premi", image: Jua, link: "/Juapremi" },
  { name: "Motor Premi", image: Madira, link: "/Gaadi" },
  { name: "Madira Premi", image: music, link: "/Madira" },
  { name: "Cinema Premi", image: cinema, link: "/Cinemapremi" },
  { name: "Aesthetics premi", image: baklol, link: "/Aestheticspremi" },
  { name: "Pencil Premi", image: Jua, link: "/Pencilpremi" },
];

const Navbar = ({cart}) => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Offer Bar */}
      <div className="w-full bg-slate-300 text-black text-sm font-semibold py-2 overflow-hidden relative z-50">
        <div className="animate-marquee whitespace-nowrap px-6">
          🔥 Flat 20% OFF on all items! Use code: <strong>KAARIGAR20</strong>
        </div>
      </div>

      <nav
        className="w-full font-serif text-[#2E2B28] relative z-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${canvas})` }}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 md:h-28 md:w-28 rounded-2xl border p-1 object-cover"
              />
            </Link>
          </div>

          {/* Brand Name */}
          <div className="hidden md:flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-[Amita] font-semibold tracking-widest uppercase">
              Kaarigar & Co.
            </h1>
            <p className="text-xs font-[Amita] tracking-wider">
              Timeless . Heartfelt . Kaarigar
            </p>
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4 text-xl">
            <div className="hidden md:flex gap-4">
              <FaSearch className="cursor-pointer hover:scale-105 transition-transform" />
              <FaUser className="cursor-pointer hover:scale-105 transition-transform" />
              <FaHeart className="cursor-pointer hover:scale-105 transition-transform" />
              <button
                onClick={() => navigate("/cart")}
                className="relative cursor-pointer"
              >
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </button>
            </div>

            <div className="md:hidden">
              {mobileMenuOpen ? (
                <FaTimes
                  className="text-2xl"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ) : (
                <FaBars
                  className="text-2xl"
                  onClick={() => setMobileMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center py-4 font-[Amita] border-t border-b text-sm tracking-wider">
          <div className="flex items-center space-x-10">
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setOpen(!open)}
              >
                Categories
              </span>

              {open && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-50">
                  <div className="flex flex-col gap-3">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.link}
                        className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold text-center">
                              {category.name}
                            </span>
                          </div>
                        </div>
                        <span className="text-gray-800 text-sm font-semibold">
                          {category.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/Original" className="cursor-pointer hover:underline">
              Kaarigar Original
            </a>
            <a href="/Shop" className="cursor-pointer hover:underline">
              SHOP
            </a>
            <a href="/Journey" className="cursor-pointer hover:underline">
              The Journey
            </a>
            <a href="/Contact" className="cursor-pointer hover:underline">
              CONTACT
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col px-6 py-4 space-y-4 bg-white font-[Amita] md:hidden">
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>
            <div>
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setOpen(!open)}
              >
                Categories
              </span>
              {open && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.link}
                      className="flex flex-col items-center group"
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-700">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/Original" className="cursor-pointer hover:underline">
              Kaarigar Original
            </a>
            <a href="/shop" className="cursor-pointer hover:underline">
              SHOP
            </a>
            <a href="/Journey" className="cursor-pointer hover:underline">
              The Journey
            </a>
            <a href="/Contact" className="cursor-pointer hover:underline">
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
