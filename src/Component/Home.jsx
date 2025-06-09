



// import React, { useState, useEffect } from 'react';
// import carsoul from './photos/slide.png';
// import carsoul1 from './photos/slide6.png';
// import carsoul2 from './photos/slide2.png';
// import carsoul3 from './photos/slide4.png';
// import carsoul4 from './photos/slide3.jpeg';
// import carsoul5 from './photos/slide7.png';
// import madira1 from './photos/madira2.png';
// import jua from './photos/Jua1.png';
// import Img6 from "./photos/pencil44.png";
// import cinema from './photos/cinema.jpg';
// import music from './photos/music.png';
// import { FaWhatsapp } from 'react-icons/fa';
// import baklol from './photos/baklol.png';
// import bgImg from './photos/madira2.png';
// import Bestseller from './Bestseller';
// import Refresh from "./Refresh";
// import About from "./About";
// import USP from "./USP";
// import brush from './photos/paint.png'; // ✅ Add your brush image
// // import Landing from "./Landing";
// // import Slide from "./Slide";
// const images = [carsoul, carsoul1, carsoul2, carsoul3, carsoul4,carsoul5];

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // 🖌️ Cursor Movement Tracker
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
//   const collections = [
//     { title: 'Madira Premi', image: madira1, link: '/Madira' },
//     { title: 'Jua Premi', image: jua, link: '/Juapremi' },
//     { title: 'Aesthetic Premi', image: cinema, link: '/Aestheticspremi' },
//     { title: 'Pencil Premi', image: Img6, link: '/Pencilpremi' },
//     { title: 'Cinema Premi', image: baklol, link: '/Cinemapremi' },

//   ];

//   return (
//     <div className="relative cursor-none">
//       {/* Custom Brush Cursor */}
//       <img
//         src={brush}
//         alt="brush"
//         className="fixed w-10 h-10 z-[9999] pointer-events-none transition-transform duration-75 ease-linear"
//         style={{
//           left: `${cursorPos.x}px`,
//           top: `${cursorPos.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//       />

//       {/* Carousel */}
//       <div className="relative w-full h-[85vh] overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((src, index) => (
//             <div key={index} className="w-full h-full flex-none">
//               <img
//                 src={src}
//                 alt={`slide-${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'
//                 }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//       {/* <Slide></Slide> */}




//       {/* Art Gallery */}
//       {/* <div className="bg-[#fefefe] py-16 px-4 md:px-12">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-[Amita] font-bold text-gray-800 mb-2">
//             <span className="inline-block w-10 h-[1px] bg-black mr-3 align-middle" />
//             Kaarigar Art Gallery
//             <span className="inline-block w-10 h-[1px] bg-black ml-3 align-middle" />
//           </h2>
//           <p className="text-gray-600 font-[Amita] text-sm md:text-base">
//             Explore Curated Intricate Art Styles
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//           {collections.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-96 object-contain"
//                 />
//               </div>
//               <h3 className="text-center font-[Amita] mt-4 text-lg font-semibold tracking-wide text-gray-800">
//                 {item.title}
//               </h3>
//               <div className="text-center mt-2">
//                 <a href={item.link} className="inline-block">
//                   <button className="group relative inline-flex items-center justify-center px-6 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white">
//                     <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//                     <span className="relative z-10">EXPLORE</span>
//                   </button>
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div> */}
//       <div className="bg-[#fefefe] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
//   <div className="text-center mb-10">
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Amita] font-bold text-gray-800 mb-2">
//       <span className="inline-block w-8 sm:w-10 h-[1px] bg-black mr-3 align-middle" />
//       Kaarigar Art Gallery
//       <span className="inline-block w-8 sm:w-10 h-[1px] bg-black ml-3 align-middle" />
//     </h2>
//     <p className="text-gray-600 font-[Amita] text-sm sm:text-base md:text-lg">
//       Explore Curated Intricate Art Styles
//     </p>
//   </div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//     {collections.map((item, index) => (
//       <div
//         key={index}
//         className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
//       >
//         <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-60 sm:h-72 md:h-80 object-contain"
//           />
//         </div>
//         <h3 className="text-center font-[Amita] mt-4 text-base sm:text-lg font-semibold tracking-wide text-gray-800">
//           {item.title}
//         </h3>
//         <div className="text-center mt-3">
//           <a href={item.link} className="inline-block">
//             <button className="group relative inline-flex items-center justify-center px-5 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white text-sm sm:text-base">
//               <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//               <span className="relative z-10">EXPLORE</span>
//             </button>
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>




//       <Bestseller />
//       <Refresh />
//       <About />
//       <USP />

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/993379745"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
//       >
//         <FaWhatsapp size={36} className="animate-wavy" />
//       </a>
//     </div>
//   );
// };

// export default Home;







import React, { useState, useEffect } from 'react';
import carsoul from './photos/slide.png';
import carsoul1 from './photos/slide3.jpeg';
import carsoul2 from './photos/slide2.png';
import madira1 from './photos/madira2.png';
import jua from './photos/Jua1.png';

import cinema from './photos/cinema.jpg';
import music from './photos/music.png';
import { FaWhatsapp } from 'react-icons/fa';
import baklol from './photos/baklol.png';
import bgImg from './photos/madira2.png';
import Bestseller from './Bestseller';
import Refresh from "./Refresh";
import About from "./About";
import USP from "./USP";
import brush from './photos/paint.png'; 
import Landing from "./Landing";
const images = [carsoul, carsoul1, carsoul2];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🖌️ Cursor Movement Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const collections = [
    { title: 'Madira Premi', image: madira1 },
    { title: 'Jua Premi', image: jua },
    { title: 'Aesthetic premi', image: cinema },
    { title: 'Music premi', image: music },
    { title: 'Baklol premi', image: baklol },
    { title: 'Gaddi premi', image: madira1 },
  ];

  return (
    <div className="relative cursor-none">
      {/* Custom Brush Cursor */}
      <img
        src={brush}
        alt="brush"
        className="fixed w-10 h-10 z-[9999] pointer-events-none transition-transform duration-75 ease-linear"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Carousel */}
      <div className="relative w-full h-[85vh] overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out h-full"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((src, index) => (
      <div key={index} className="w-full h-full flex-none">
        <img
          src={src}
          alt={`slide-${index}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
          index === currentIndex ? 'bg-white' : 'bg-gray-500'
        }`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>
    

      

      {/* Art Gallery */}
      <div className="bg-[#fefefe] py-16 px-4 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-[Amita] font-bold text-gray-800 mb-2">
            <span className="inline-block w-10 h-[1px] bg-black mr-3 align-middle" />
            Kaarigar Art Gallery
            <span className="inline-block w-10 h-[1px] bg-black ml-3 align-middle" />
          </h2>
          <p className="text-gray-600 font-[Amita] text-sm md:text-base">
            Explore Curated Intricate Art Styles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-contain"
                />
              </div>
              <h3 className="text-center font-[Amita] mt-4 text-lg font-semibold tracking-wide text-gray-800">
                {item.title}
              </h3>
              <div className="text-center mt-2">
  <a href="/your-link" className="inline-block">
    <button className="group relative inline-flex items-center justify-center px-6 py-2 font-[Amita] text-gray-800 border border-gray-800 rounded-full overflow-hidden transition-all duration-300 hover:text-white">
      {/* Animated background fill */}
      <span className="absolute inset-0 w-full h-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

      {/* Button text */}
      <span className="relative z-10">EXPLORE</span>
    </button>
  </a>
</div>

            </div>
          ))}
        </div>
      </div>

      <Bestseller />
      <Refresh />
      <About />
      <USP />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={36} className="animate-wavy" />
      </a>
    </div>
  );
};

export default Home;
