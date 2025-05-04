

// import { useState } from 'react';
// import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import logo from './photos/logo.jpeg'; // Replace with circular icon if needed
// import Jua from './photos/Jua.jpg';
// import Madira from './photos/madira1.png';
// import music from './photos/music.png';
// import cinema from './photos/cinema.jpg';
// import baklol from './photos/baklol.png';

// const categories = [
//   { name: "Jua Premi", image: Jua},
//   { name: "Gadi Premi", image: Madira},
//   { name: "Madira Premi", image: music},
//   { name: "Cinema premi", image: cinema},
//   { name: "Baklol Premi", image: baklol},
//   { name: "Music Premi", image: Jua},
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white font-serif text-[#2E2B28] relative z-50">
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
//           <span className="cursor-pointer hover:underline">Home</span>

//           {/* Categories with Dropdown */}
//           <div className="relative">
//             <span
//               className="cursor-pointer hover:underline"
//               onClick={() => setOpen(!open)}
//             >
//               Categories
//             </span>

//             {open && (
//               <div className="absolute left-1/2 -translate-x-1/2 top-10 mt-2 w-[360px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4">
//                 <div className="grid grid-cols-3 gap-4">
//                   {categories.map((category) => (
//                     <div
//                       key={category.name}
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
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex space-x-6 text-sm font-semibold text-gray-700">
//   <a href="/Original" className="cursor-pointer hover:underline">Kaarigar Original</a>
//   <a href="/shop" className="cursor-pointer hover:underline">SHOP</a>
//   <a href="/the-journey" className="cursor-pointer hover:underline">The Journey</a>
//   <a href="/contact" className="cursor-pointer hover:underline">CONTACT</a>
// </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from './photos/jua.jpg'; // Replace with circular icon if needed
import Jua from './photos/jua.jpg';
import Madira from './photos/madira1.png';
import music from './photos/music.png';
import cinema from './photos/cinema.jpg';
import baklol from './photos/baklol.png';

const categories = [
  { name: "Jua Premi", image: Jua, link: "/Juapremi" },
  { name: "Motor Premi", image: Madira, link: "/Gaadi" },
  { name: "Madira Premi", image: music, link: "/Madira" },
  { name: "Cinema premi", image: cinema, link: "/categories/cinema-premi" },
  { name: "Aesthetics premi", image: baklol, link: "/Aestheticspremi" },
  { name: "Music Premi", image: Jua, link: "/categories/music-premi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white font-serif text-[#2E2B28] relative z-50">
      {/* Top Row */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-28 w-28 rounded-2xl border p-1 object-cover"
          />
        </div>

        {/* Brand Name */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-[Amita] lg:text-5xl font-semibold tracking-widest uppercase">
            Kaarigar & Co.
          </h1>
          <p className="text-xs font-[Amita] tracking-wider">Timeless . Heartfelt . Kaarigar</p>
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-xl">
          <FaSearch className="cursor-pointer hover:scale-105 transition-transform" />
          <FaUser className="cursor-pointer hover:scale-105 transition-transform" />
          <FaHeart className="cursor-pointer hover:scale-105 transition-transform" />
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center items-center py-4 font-[Amita] border-t border-b text-sm tracking-wider relative">
        <div className="flex items-center space-x-10">
          <span className="cursor-pointer hover:underline">Home</span>

          {/* Categories with Dropdown */}
          <div className="relative">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setOpen(!open)}
            >
              Categories
            </span>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 top-10 mt-2 w-[360px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-50">
                <div className="grid grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.link}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden relative group-hover:scale-105 transition-transform">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            {category.name}
                          </span>
                        </div>
                      </div>
                      <span className="mt-1 text-gray-700 text-xs font-semibold">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-6 text-sm font-semibold text-gray-700">
            <a href="/Original" className="cursor-pointer hover:underline">Kaarigar Original</a>
            <a href="/shop" className="cursor-pointer hover:underline">SHOP</a>
            <a href="/the-journey" className="cursor-pointer hover:underline">The Journey</a>
            <a href="/contact" className="cursor-pointer hover:underline">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
