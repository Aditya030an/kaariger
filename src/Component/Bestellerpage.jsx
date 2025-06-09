import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";
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

// --- VanillaTilt Wrapper
function TiltCard({ children }) {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);
  return <div ref={tiltRef}>{children}</div>;
}

// --- Price rates per inch²
const pricingPerInch = {
  handpainted: 45,
  poster: 10,
  aaPoster: 18,
};

// --- Products list with base price (for reference)
const products = [
  { id: 1, title: "Fibers | wall art on paper", basePrice: 5220, image: Img1 },
  {
    id: 2,
    title: "Wonder At Night | wall art on canvas",
    basePrice: 3240,
    image: Img2,
  },
  {
    id: 3,
    title: "Mona Lisa Modern | wall art on canvas",
    basePrice: 2220,
    image: Img3,
  },
  {
    id: 4,
    title: "Vibrant Abstract | wall art on paper",
    basePrice: 4890,
    image: Img4,
  },
  {
    id: 5,
    title: "Golden Sunrise | wall art on canvas",
    basePrice: 6120,
    image: Img5,
  },
  {
    id: 6,
    title: "Mystic Mountains | wall art on paper",
    basePrice: 4550,
    image: Img6,
  },
  {
    id: 7,
    title: "Urban Jungle | wall art on canvas",
    basePrice: 3999,
    image: Img7,
  },
  {
    id: 8,
    title: "Ocean Dreams | wall art on paper",
    basePrice: 5999,
    image: Img8,
  },
  {
    id: 9,
    title: "Color Burst | wall art on canvas",
    basePrice: 3400,
    image: Img9,
  },
  {
    id: 10,
    title: "Pastel Skies | wall art on paper",
    basePrice: 2999,
    image: Img10,
  },
];

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [width, setWidth] = useState(48);
  const [height, setHeight] = useState(36);
  const [artType, setArtType] = useState("handpainted");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const area = width * height;
    const rate = pricingPerInch[artType];
    setPrice(area * rate);
  }, [width, height, artType]);

  const handleAdd = () => {
    const cartItem = {
      ...product,
      width,
      height,
      artType,
      price,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <button
          onClick={onClose}
          className="float-right text-xl font-bold text-gray-500"
        >
          ✖
        </button>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-64 object-contain mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>

        <div className="mb-2">
          <label className="block mb-1">
            Enter Width & Height (in inches):
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(+e.target.value)}
              className="border px-2 py-1 w-20 rounded"
            />
            <span>X</span>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              className="border px-2 py-1 w-20 rounded"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block mb-1">Select Art Type:</label>
          <select
            value={artType}
            onChange={(e) => setArtType(e.target.value)}
            className="border px-2 py-1 w-full rounded"
          >
            <option value="handpainted">Handpainted (₹45/inch²)</option>
            <option value="poster">Poster (₹10/inch²)</option>
            <option value="aaPoster">AA Poster (₹18/inch²)</option>
          </select>
        </div>

        <p className="text-lg font-semibold mb-4 text-pink-600">
          Updated Price: ₹{price.toLocaleString()}
        </p>

        <button
          onClick={handleAdd}
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Bestsellerpage = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const existing = cart.find(
      (item) =>
        item.id === product?.id &&
        item.artType === product?.artType &&
        item.basePrice === product?.basePrice &&
        item.price === product?.price &&
        item.image === product?.image &&
        item.width === product?.width &&
        item.height === product?.height
    );
    if (existing) {
      const updated = cart.map((item) =>
        item === existing ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-12 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-[Amita] text-white mb-4 leading-tight text-shadow-lg">
            <span className="inline-block w-16 h-1 bg-teal-500 rounded-full mb-2"></span>
            <br />
            ताज़ा, ट्रेंडी, टॉप - Our Bestsellers
          </h1>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-lg"
          style={{ backgroundImage: `url(${bgImg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>

      {/* Product Grid */}
      <div className="px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product?.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TiltCard>
                <div
                  className="bg-white bg-opacity-80 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-64 object-contain"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-[Amita] font-semibold text-gray-800">
                      {product?.title}
                    </h3>
                    <p className="text-teal-500 font-bold">
                      Starts at ₹{product?.basePrice}
                    </p>
                    <p className="text-gray-500 text-sm">Click to Customize</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default Bestsellerpage;
