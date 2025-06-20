import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { PiMagnifyingGlassPlusThin } from "react-icons/pi";

const pricingPerInch = {
  frame: 45,
  canvas: 10,
};

const ProductCart = ({ product, onClose, onAddToCart }) => {
  const productName = product?.title.split(" | ")[0] || "Product";
  const [artType, setArtType] = useState("frame");
  const [price, setPrice] = useState(0);
  const [media, setMedia] = useState("canvas");
  const [selectedFrame, setSelectedFrame] = useState("Matte Black");
  const [selectSize, setSelectSize] = useState("12.00 × 15.00");

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
    const rate = pricingPerInch[artType];
    setPrice(area * rate);
  }, [selectSize, artType]);

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
    <div className="fixed inset-0 z-50 bg-white w-full h-full gap-1 flex flex-col items-center justify-center ">
      <h4 className="text-[18px] text-gray-600 font-mono font-light">
        Art Paint Decor Object Mixed Media Art Gallery Walls Custom Framing
      </h4>
      <button
        onClick={onClose}
        className=" text-[22px] font-medium text-black flex w-full item-start gap-1 items-center px-4"
      >
        <IoArrowBack size={18} /> Back
      </button>
      <div className="flex flex-col md:flex-row gap-10 w-9/12">
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="relative bg-gray-100 rounded-md w-full h-full flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-[300px] h-[300px] object-contain "
            />
            <div className="absolute bottom-[10px] w-full flex items-center gap-8 justify-center p-2">
              <CiHeart size={25} className="cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out" />
              <GoShareAndroid size={25} className="cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out" />
              <BsPinAngle size={25} className="cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out" />
              <PiMagnifyingGlassPlusThin size={25} className="cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold">{productName}</h2>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold mb-2">
              Choose Framed or Print
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setArtType("frame");
                }}
                className={`border border-gray-400 ${artType === "frame" ? "bg-zinc-700 text-white" : "bg-white text-black"} cursor-pointer px-20 py-2 font-medium rounded transition-all duration-700 ease-in-out`}
              >
                Framed
              </button>
              <button
                onClick={() => {
                  setArtType("print");
                }}
                className={`border border-gray-400 ${artType === "print" ? "bg-zinc-700 text-white" : "bg-white text-black"} cursor-pointer px-20 py-2 font-medium rounded transition-all duration-700 ease-in-out`}
              >
                Print
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold mb-2">Choose a Media</h3>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setMedia("canvas");
                }}
                className={`border border-gray-400 ${media === "canvas" ? "bg-zinc-700 text-white" : "bg-white text-black"} cursor-pointer px-20 py-2 font-medium rounded transition-all duration-700 ease-in-out`}
              >
                Canvas
              </button>
              <button
                onClick={() => {
                  setMedia("paper");
                }}
                className={`border border-gray-400 ${media === "paper" ? "bg-zinc-700 text-white" : "bg-white text-black"} cursor-pointer px-20 py-2 font-medium rounded transition-all duration-700 ease-in-out`}
              >
                Paper
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold">Frame Style</h3>
            <p className="text-sm text-gray-500 mb-2">
              Selected Frame: {selectedFrame}
            </p>
            <div className="flex gap-4">
              {frames.map((frame) => (
                <button
                  key={frame.name}
                  className={`w-12 h-12 rounded-full border-2 cursor-pointer transition-all duration-700 ease-in-out ${frame.color} ${selectedFrame === frame.name ? "ring-2 ring-black" : ""}`}
                  title={frame.name}
                  onClick={() => setSelectedFrame(frame.name)}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-serif font-bold mb-2">Select a Size (Inches)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 text-sm rounded ${selectSize === size ? "bg-zinc-700 text-white" : "bg-white text-black"}`}
                  onClick={() => setSelectSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-zinc-700 text-white py-2 rounded hover:bg-zinc-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
