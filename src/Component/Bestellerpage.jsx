




import React from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/cinema.jpg";
import Img1 from "./photos/best1.jpeg";
import Img2 from "./photos/best2.jpeg";
import Img3 from "./photos/best3.jpeg";
import Img4 from "./photos/best4.jpeg";
import Img5 from "./photos/best5.jpeg";
import Img6 from "./photos/best6.jpeg";
import Img7 from "./photos/best7.jpeg";
import Img8 from "./photos/best8.png";
import Img9 from "./photos/best9.png";
import Img10 from "./photos/best11.jpeg";

// Initialize tilt
function TiltCard({ children }) {
  const tiltRef = React.useRef(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="will-change-transform">
      {children}
    </div>
  );
}

// Product data
const products = [
  { id: 1, title: "Fibers | wall art on paper", price: "₹ 5220", image: Img1, link: "/wall-art-collage-set/1280" },
  { id: 2, title: "Wonder At Night | wall art on canvas", price: "₹ 3240", image: Img2, link: "#" },
  { id: 3, title: "Mona Lisa Modern | wall art on canvas", price: "₹ 2220", image: Img3, link: "#" },
  { id: 4, title: "Vibrant Abstract | wall art on paper", price: "₹ 4890", image: Img4, link: "#" },
  { id: 5, title: "Golden Sunrise | wall art on canvas", price: "₹ 6120", image: Img5, link: "#" },
  { id: 6, title: "Mystic Mountains | wall art on paper", price: "₹ 4550", image: Img6, link: "#" },
  { id: 7, title: "Urban Jungle | wall art on canvas", price: "₹ 3999", image: Img7, link: "#" },
  { id: 8, title: "Ocean Dreams | wall art on paper", price: "₹ 5999", image: Img8, link: "#" },
  { id: 9, title: "Color Burst | wall art on canvas", price: "₹ 3400", image: Img9, link: "#" },
  { id: 10, title: "Pastel Skies | wall art on paper", price: "₹ 2999", image: Img10, link: "#" },
];

const Bestsellerpage = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 min-h-screen">
      
     
   

<section className="relative py-20 px-4 md:px-12 flex flex-col items-center justify-center text-center">
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative z-10"
  >
    <h1 className="text-4xl md:text-6xl font-[Amita] text-white mb-4 leading-tight text-shadow-lg">
      <span className="inline-block w-16 h-1 bg-teal-500 rounded-full mb-2"></span><br />
      ताज़ा, ट्रेंडी, टॉप -  Our Bestsellers
    </h1>
  
  </motion.div>

  {/* Background Blur with Overlay */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-lg"
    style={{ backgroundImage: `url(${bgImg})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  ></motion.div>
  
  {/* Stronger Semi-transparent Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
</section>

     

      {/* Divider */}
      <motion.div
        className="w-2/3 mx-auto my-8 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "66%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
 {/* Filter and Sort */}
 <div className="bg-gray-100 p-4 rounded-lg flex flex-wrap items-center justify-between mb-10">
          <div className="flex space-x-6 text-sm font-semibold text-gray-700">
            <span>FILTER:</span>
            <button className="hover:underline">SET OF ▾</button>
            <button className="hover:underline">COLOR ▾</button>
            <button className="hover:underline">VIEW ▾</button>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-700 text-sm">Showing {products.length} artworks</span>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-gray-700 text-sm">Sort by Price</label>
              <select id="sort" className="border rounded-md px-2 py-1 text-sm">
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
        </div>



      {/* Bestsellers Grid */}
      <div className="px-4 md:px-12 py-12">
      

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TiltCard>
                <a
                  href={product.link}
                  className="group block bg-white bg-opacity-80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-[Amita] font-semibold text-gray-800 mb-1">{product.title}</h3>
                    <p className="text-teal-500 font-bold">{product.price}</p>
                    <p className="text-gray-500 text-sm mt-1">Multiple Sizes Available</p>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Bestsellerpage;



