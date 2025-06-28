import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { PiMagnifyingGlassPlusThin } from "react-icons/pi";

const pricingPerInch = {
  frame: 45,
  print: 10,
  canvas: 20,
  paper: 15,
};

const ProductCart = ({ product, onClose, onAddToCart }) => {
  const productName = product?.title.split(" | ")[0] || "Product";
  const [artType, setArtType] = useState("frame");
  const [price, setPrice] = useState(0);
  const [media, setMedia] = useState("canvas");
  const [selectedFrame, setSelectedFrame] = useState("Matte Black");
  const [selectSize, setSelectSize] = useState("12.00 × 15.00");

  console.log("Product Cart Rendered", product);

  const frames = [
    { name: "Matte Black", color: "bg-black" },
    { name: "White", color: "bg-white border" },
    { name: "Cream", color: "bg-[#f5f5f5] border" },
    { name: "Oak", color: "bg-yellow-700" },
    { name: "Walnut", color: "bg-amber-950" },
  ];

  const sizes = [
    "12.00 × 15.00",
    "16.00 × 20.00",
    "20.00 × 26.00",
    "24.00 × 31.00",
    "28.00 × 36.00",
    "32.00 × 41.00",
    "36.00 × 46.00",
    "40.00 × 51.00",
  ];

  useEffect(() => {
    const width = parseFloat(selectSize.split(" × ")[0]);
    const height = parseFloat(selectSize.split(" × ")[1]);
    const area = width * height;
    const rate1 = pricingPerInch[artType];
    const rate2 = pricingPerInch[media];
    const rate = rate1 + rate2;
    setPrice(area * rate);
  }, [selectSize, artType, media]);

  const handleAdd = () => {
    const cartItem = {
      ...product,
      width: parseFloat(selectSize.split(" × ")[0]),
      height: parseFloat(selectSize.split(" × ")[1]),
      artType,
      media,
      selectedFrame,
      price,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white w-screen h-screen overflow-y-auto">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-2 flex flex-col gap-4">
        <button
          onClick={onClose}
          className="text-[22px] font-medium text-black flex items-center gap-1"
        >
          <IoArrowBack size={18} /> Back
        </button>

        <h4 className="text-[18px] text-gray-600 font-mono font-light text-center">
          Art Paint Decor Object Mixed Media Art Gallery Walls Custom Framing
        </h4>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side (Image & Details) */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="relative bg-gray-100 rounded-md w-full flex items-center justify-center p-4">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[400px] object-contain"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-center">
              {productName}
            </h2>

            <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 px-2">
              <div className="flex flex-col gap-1 text-base">
                <span className="font-semibold">Best Price:</span>
                <p>
                  ₹
                  {product?.bestPrice?.toLocaleString() ||
                    product?.basePrice?.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-base">
                <span className="font-semibold">
                  Price After Size Selection:
                </span>
                <p>₹{price?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Right Side (Options) */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Frame or Print */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Choose Framed or Print
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => setArtType("frame")}
                  className={`border border-gray-400 px-4 py-3 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between rounded font-medium transition-all duration-300 ${
                    artType === "frame"
                      ? "bg-zinc-700 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span>Framed Art</span>
                  <span className="text-sm font-normal text-gray-400 sm:ml-2">
                    ₹{pricingPerInch.frame.toLocaleString()}/inch
                  </span>
                </button>

                <button
                  onClick={() => setArtType("print")}
                  className={`border border-gray-400 px-4 py-3 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between rounded font-medium transition-all duration-300 ${
                    artType === "print"
                      ? "bg-zinc-700 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span>Print</span>
                  <span className="text-sm font-normal text-gray-400 sm:ml-2">
                    ₹{pricingPerInch.print.toLocaleString()}/inch
                  </span>
                </button>
              </div>
            </div>

            {/* Choose a Media */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Choose a Media
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => setMedia("canvas")}
                  className={`border border-gray-400 px-4 py-3 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between rounded font-medium transition-all duration-300 ${
                    media === "canvas"
                      ? "bg-zinc-700 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span>Canvas</span>
                  <span className="text-sm font-normal text-gray-400 sm:ml-2">
                    ₹{pricingPerInch.canvas.toLocaleString()}/inch
                  </span>
                </button>

                <button
                  onClick={() => setMedia("paper")}
                  className={`border border-gray-400 px-4 py-3 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between rounded font-medium transition-all duration-300 ${
                    media === "paper"
                      ? "bg-zinc-700 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span>Paper</span>
                  <span className="text-sm font-normal text-gray-400 sm:ml-2">
                    ₹{pricingPerInch.paper.toLocaleString()}/inch
                  </span>
                </button>
              </div>
            </div>

            {/* Frame Style */}
            <div>
              <h3 className="text-xl font-serif font-bold">Frame Style</h3>
              <p className="text-sm text-gray-500 mb-2">
                Selected Frame: {selectedFrame}
              </p>
              <div className="flex gap-3 flex-wrap">
                {frames.map((frame) => (
                  <button
                    key={frame.name}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                      frame.color
                    } ${
                      selectedFrame === frame.name ? "ring-2 ring-black" : ""
                    }`}
                    onClick={() => setSelectedFrame(frame.name)}
                    title={frame.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-2">
                Select a Size (Inches)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`border px-4 py-2 text-sm rounded ${
                      selectSize === size
                        ? "bg-zinc-700 text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setSelectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-zinc-700 text-white py-2 rounded hover:bg-zinc-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
