// import { motion } from "framer-motion";
// import { FaGlobe, FaSmile, FaUserTie, FaShieldAlt, FaRocket } from "react-icons/fa";

// const uspData = [
//   {
//     icon: <FaGlobe className="text-3xl text-blue-600" />,
//     title: "Global Reach",
//     description: "We’re delivering worldwide with our delivery partners making sure prompt and door to door delivery"
//   },
//   {
//     icon: <FaSmile className="text-3xl text-green-600" />,
//     title: "⁠Original handmade Art",
//     description: "All our paintings and art pieces are handmade and unique to give your space a unique touch."
//   },
//   {
//     icon: <FaUserTie className="text-3xl text-yellow-600" />,
//     title: "⁠limited availability",
//     description: "We make sure to keep the Art limited to certain pieces only so that your collection is unique and your neighbour can’t buy the same art piece."
//   },
//   {
//     icon: <FaShieldAlt className="text-3xl text-purple-600" />,
//     title: "Customisable",
//     description: "Connect with us even if you want a simple change in the original work or you need something that’s not available with us. We’re gonna get it made for you!"
//   },
//   {
//     icon: <FaRocket className="text-3xl text-pink-600" />,
//     title: "Premium Quality",
//     description: "We make sure there is zero compromise on quality and we deliver you timeless pieces."
//   }
// ];

// const floatingOrbVariants = {
//   animate: {
//     y: [0, -20, 0],
//     x: [0, 10, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

// export default function USPSection() {
//   return (
//     <section className="relative bg-white py-20 px-6 overflow-hidden">
//       {/* Floating Orb */}
//       <motion.div
//         variants={floatingOrbVariants}
//         animate="animate"
//         className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30"
//       />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center relative z-10">
//         {uspData.map((usp, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             <div className="mb-4">{usp.icon}</div>
//             <h3 className="text-gray-900 text-lg font-semibold mb-2">{usp.title}</h3>
//             <p className="text-gray-500 text-sm">{usp.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FaGlobe, FaSmile, FaUserTie, FaShieldAlt, FaRocket } from "react-icons/fa";

const uspData = [
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: "Global Reach",
    description: "We’re delivering worldwide with our delivery partners making sure prompt and door to door delivery"
  },
  {
    icon: <FaSmile className="text-4xl text-green-500" />,
    title: "⁠Original handmade Art",
    description: "All our paintings and art pieces are handmade and unique to give your space a unique touch."
  },
  {
    icon: <FaUserTie className="text-4xl text-yellow-500" />,
    title: "⁠limited availability",
    description: "We make sure to keep the Art limited to certain pieces only so that your collection is unique and your neighbour can’t buy the same art piece."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-purple-500" />,
    title: "Customisable",
    description: "Connect with us even if you want a simple change in the original work or you need something that’s not available with us. We’re gonna get it made for you!"
  },
  {
    icon: <FaRocket className="text-4xl text-pink-500" />,
    title: "Premium Quality",
    description: "We make sure there is zero compromise on quality and we deliver you timeless pieces."
  }
];

const floatingOrbVariants = {
  animate: {
    y: [0, -30, 0],
    x: [0, 20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function USPSection() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Floating Orb */}
      <motion.div
        variants={floatingOrbVariants}
        animate="animate"
        className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          The features that set us apart and make your experience memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
        {uspData.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-6">
              {usp.icon}
            </div>
            <h3 className="text-gray-900 text-lg font-semibold mb-3">{usp.title}</h3>
            <p className="text-gray-500 text-sm">{usp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}