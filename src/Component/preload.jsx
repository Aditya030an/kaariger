
// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from './photos/logo.jpeg';

// const Preload = ({ isVisible }) => {
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           key="preloader"
//           className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white z-[9999]"
//         >
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: '160px' }} // Match image height
//             transition={{ duration: 1.5, ease: 'easeInOut' }}
//             className="overflow-hidden"
//           >
//             <img
//               src={logo}
//               alt="Kaarigar & Co. Logo"
//               className="w-40 h-40 object-contain"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Preload;


// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from './photos/logo.jpeg';

// const title = 'KAARIGAR & CO.';

// const letterVariants = {
//   initial: { y: 60, opacity: 0 },
//   animate: (i) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 1.8 + i * 0.05,
//       duration: 0.8,
//       ease: [0.645, 0.045, 0.355, 1],
//     },
//   }),
// };

// const Preload = ({ isVisible }) => {
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="fixed inset-0 z-[9999] bg-black flex items-center justify-center flex-col"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, y: '-100%', transition: { duration: 1.2, ease: 'easeInOut' } }}
//         >
//           {/* Left and Right Panels like Curtains */}
//           <motion.div
//             className="absolute top-0 left-0 h-full w-1/2 bg-black z-20"
//             initial={{ x: 0 }}
//             animate={{ x: '-100%' }}
//             transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
//           />
//           <motion.div
//             className="absolute top-0 right-0 h-full w-1/2 bg-black z-20"
//             initial={{ x: 0 }}
//             animate={{ x: '100%' }}
//             transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
//           />

//           {/* Logo Zoom-In Reveal */}
//           <motion.div
//             className="z-30 overflow-hidden rounded-full border-4 border-white mb-6"
//             initial={{ scale: 0.6, opacity: 0 }}
//             animate={{
//               scale: 1,
//               opacity: 1,
//               transition: { delay: 1.2, duration: 1.3, ease: [0.645, 0.045, 0.355, 1] },
//             }}
//           >
//             <motion.img
//               src={logo}
//               alt="Kaarigar & Co."
//               className="w-32 h-32 object-cover rounded-full"
//               initial={{ y: '100%' }}
//               animate={{
//                 y: 0,
//                 transition: { delay: 1.5, duration: 1.2, ease: 'easeOut' },
//               }}
//             />
//           </motion.div>

//           {/* Animated Letters Like Movie Titles */}
//           <motion.div className="flex gap-1 z-30 text-white text-xl tracking-widest font-bold uppercase">
//             {[...title].map((char, i) => (
//               <motion.span key={i} custom={i} variants={letterVariants} initial="initial" animate="animate">
//                 {char === ' ' ? '\u00A0' : char}
//               </motion.span>
//             ))}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Preload;




import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './photos/logo.jpeg';

const title = 'KAARIGAR & CO.';

const letterVariants = {
  initial: { y: 60, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8 + i * 0.05,
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1],
    },
  }),
};

const Preload = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center flex-col"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 1.2, ease: 'easeInOut' } }}
        >
          {/* Left and Right Panels */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-black z-20"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 bg-black z-20"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ delay: 2.6, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          />

          {/* Cinematic Logo Reveal */}
          <motion.div
            className="z-30 mb-6"
            initial={{ scale: 1.2, opacity: 0, y: 40 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.2,
                duration: 1.3,
                ease: [0.645, 0.045, 0.355, 1],
              },
            }}
          >
            <img
              src={logo}
              alt="Kaarigar & Co. Logo"
              className="w-44 h-44 object-contain"
            />
          </motion.div>

          {/* Animated Title */}
          <motion.div className="flex gap-1 z-30  font-[Amita] text-white text-xl tracking-widest font-bold uppercase">
            {[...title].map((char, i) => (
              <motion.span key={i} custom={i} variants={letterVariants} initial="initial" animate="animate">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preload;