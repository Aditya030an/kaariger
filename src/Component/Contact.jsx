


// import { motion } from "framer-motion";
// import { useEffect } from "react";

// const Contact = () => {
//   useEffect(() => {
//     document.title = "Contact — StudioX";
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-[#f5f5f5] text-gray-900 overflow-hidden font-[Satoshi] flex items-center justify-center px-6 py-24">

//       {/* Subtle Noise Texture */}
//       <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>

//       {/* Abstract Floating Shapes */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 0.06, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.4 }}
//         className="absolute top-[-100px] left-[10%] w-[600px] h-[600px] bg-black rounded-full blur-[160px]"
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 0.04, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.7 }}
//         className="absolute bottom-[-100px] right-[5%] w-[500px] h-[500px] bg-black rounded-full blur-[140px]"
//       />

//       {/* Contact Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.98 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row bg-white/70 backdrop-blur-xl border border-zinc-200 shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden"
//       >
//         {/* Left Panel */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
//           <div>
//             <h2 className="text-4xl font-[sansation] font-bold mb-4 leading-tight">
//               Get in touch
//             </h2>
//             <p className="text-gray-600 font-[sansation] text-lg">
//               Tell us what you're dreaming up. We'll bring it to life.
//             </p>
//           </div>

//           <div className="mt-10 space-y-4 font-[sansation] text-sm text-gray-500">
//             <div>
//               <span className="block font-[sansation] text-gray-700 font-semibold">Email</span>
//               contact@studiox.com
//             </div>
//             <div>
//               <span className="block font-[sansation] text-gray-700 font-semibold">Location</span>
//               New York · Remote Available
//             </div>
//           </div>
//         </div>

//         {/* Right Panel: Form */}
//         <form className="w-full md:w-1/2 p-10 bg-white font-[sansation] space-y-6">
//           <div className="relative font-[sansation] ">
//             <input
//               type="text"
//               required
//               placeholder="Name"
//               className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition placeholder-gray-400"
//             />
//           </div>
//           <div className="relative font-[sansation]">
//             <input
//               type="email"
//               required
//               placeholder="Email"
//               className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition placeholder-gray-400"
//             />
//           </div>
//           <div className="relative">
//             <textarea
//               required
//               placeholder="Your message"
//               rows="4"
//               className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-black transition placeholder-gray-400 resize-none"
//             />
//           </div>
//           <motion.button
//             whileTap={{ scale: 0.98 }}
//             whileHover={{ scale: 1.02 }}
//             className="w-full bg-black font-[sansation] text-white py-3 rounded-xl shadow hover:shadow-md transition-all"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;



import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#fefefe] font-[sansation] text-neutral-900 flex flex-col md:flex-row ">
      {/* Left Visual Panel */}
      <div className="w-full md:w-1/2 relative bg-[#fafafa] border-r border-gray-200 p-10 flex flex-col justify-between">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold font-[sansation] leading-tight"
          >
            Let’s talk <br />
            <span className="text-neutral-500 font-[sansation] font-light">we’re here to help.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-sm font-[sansation] text-neutral-600"
          >
            <ShoppingBag size={20} />
            Order Issues · Delivery · Partnerships
          </motion.div>
        </div>

        {/* Floating Mock Product Help Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative mt-16 bg-white border border-gray-200 shadow-xl rounded-2xl p-6 max-w-sm"
        >
          <p className="text-lg font-medium font-[sansation]">Having trouble with a recent order?</p>
          <p className="text-sm font-[sansation] text-gray-500 mt-2">Let us know your order ID and we'll get it sorted fast.</p>
          <button className="mt-4 font-[sansation] text-black font-semibold flex items-center gap-2 group">
            Track Order
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </button>
        </motion.div>
      </div>

      {/* Right Contact Form */}
      <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl space-y-8"
        >
          <div>
            <label className="block text-sm font-[sansation] mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border-b font-[sansation] border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block font-[sansation] text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border-b border-gray-300 py-3 font-[sansation] bg-transparent focus:outline-none focus:border-black placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block font-[sansation] text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us what's going on..."
              className="w-full border-b font-[sansation] border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black placeholder-gray-400 transition resize-none"
            />
          </div>

          {/* Magnetic Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white py-3  font-[sansation] rounded-xl transition-all hover:shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
