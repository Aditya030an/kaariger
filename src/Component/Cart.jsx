import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: "Modern Cat Tree",
    price: 59.99,
    quantity: 2,
    image: "/images/cat-tree.jpg",
  },
  {
    id: 2,
    name: "Stylish Dog Bed",
    price: 79.99,
    quantity: 1,
    image: "/images/dog-bed.jpg",
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white px-6 sm:px-16 py-12 text-gray-800">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-6">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="text-red-400 hover:text-red-600 mt-2 transition">
                    <X className="w-5 h-5 inline" /> Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Cart Summary */}
          <motion.div
            className="bg-gray-100 p-8 rounded-2xl shadow-xl h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Summary</h2>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
              Checkout
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
