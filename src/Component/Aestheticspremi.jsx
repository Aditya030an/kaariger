import React  ,{useState , useEffect} from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/madira5.png";
import kaarigar1 from "./photos/Aestheticspremi.jpeg";
import kaarigar2 from "./photos/Aestheticspremi2.jpeg";
import kaarigar3 from "./photos/Aestheticspremi3.jpeg";
import Img4 from "./photos/Aestheticspremi5.jpeg";
import Img5 from "./photos/Aestheticspremi6.jpeg";
import Img6 from "./photos/Aestheticspremi4.jpeg";

import Img8 from "./photos/Aestheticspremi7.jpeg";
import Img9 from "./photos/Aestheticspremi9.jpeg";

// TiltCard
function TiltCard({ children }) {
  const tiltRef = React.useRef(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        perspective: 1000,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="will-change-transform">
      {children}
    </div>
  );
}

// --- Price rates per inch²
const pricingPerInch = {
  handpainted: 45,
  poster: 10,
  aaPoster: 18,
};

// Products
const originals = [
  {
    id: 1,
    title: "Handcrafted Dreams | Original Artwork",
    basePrice:  7999,
    image: kaarigar1,
    link: "#",
  },
  {
    id: 2,
    title: "Soulful Symphony | Canvas Masterpiece",
    basePrice:  6499,
    image: kaarigar2,
    link: "#",
  },
  {
    id: 3,
    title: "Mystic Reflections | Paper Original",
    basePrice:  7299,
    image: kaarigar3,
    link: "#",
  },
  {
    id: 4,
    title: "Handcrafted Dreams | Original Artwork",
    basePrice:  7999,
    image: Img4,
    link: "#",
  },
  {
    id: 5,
    title: "Mystic Reflections | Paper Original",
    basePrice:  7299,
    image: Img5,
    link: "#",
  },
  {
    id: 6,
    title: "Mystic Reflections | Paper Original",
    basePrice:  7299,
    image: Img6,
    link: "#",
  },

  {
    id: 9,
    title: "Mystic Reflections | Paper Original",
    basePrice:  7299,
    image: Img8,
    link: "#",
  },
  {
    id: 8,
    title: "Mystic Reflections | Paper Original",
    basePrice:  7299,
    image: Img9,
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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

const Aestheticspremi = ({cart , setCart}) => {
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
    <section className="relative overflow-hidden min-h-screen bg-black py-20 px-6 md:px-16">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-45 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-white leading-tight tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 rounded-full"></span>
          Aesthetics Premi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light"
        >
          Explore the authentic soul of art, handwoven by our finest creators.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <TiltCard>
              <a
                href={product?.link}
                 onClick={() => setSelectedProduct(product)}
                className="group block bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#00ffc3] transition-all duration-700 p-5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-[Amita] font-bold text-white mb-2">
                    {product?.title}
                  </h3>
                  <p className="text-teal-400 font-semibold text-lg">
                    ₹ {product?.basePrice}
                  </p>
                  <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide">
                    Exclusive Originals
                  </p>
                </div>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Animated Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
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

export default Aestheticspremi;
