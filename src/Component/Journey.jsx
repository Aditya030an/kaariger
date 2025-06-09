import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden font-serif">
      
      {/* Hero Section: Cinematic & Artistic */}
      <section className="relative w-full h-screen flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://linktoyourimage.com)' }}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-7xl md:text-9xl font-bold text-center text-white uppercase leading-tight px-10"
        >
          Discover the Art of Curated Beauty
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 flex justify-center w-full"
        >
          <p className="text-xl text-white">Scroll to discover our philosophy</p>
        </motion.div>
      </section>

      {/* Art Philosophy Section */}
      <section className="relative py-32 px-10 md:px-24 bg-[#f7f7f7]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold text-black">
            Where Passion Meets Purpose
          </h2>
          <p className="mt-6 text-lg text-gray-800 max-w-3xl mx-auto">
            Our art is more than just objects; it’s a manifestation of dreams, stories, and expressions. Every piece is designed with purpose and every brushstroke carries a legacy.
          </p>
        </motion.div>

        {/* Layered Card Elements */}
        <div className="mt-20 flex justify-center gap-16">
          {[
            { title: 'Crafted with Intent', icon: '🎨', description: 'Each piece is curated with deep thought and emotion, bringing life to your space.' },
            { title: 'Bridging Imagination', icon: '💭', description: 'A story behind each artwork that sparks a sense of wonder in every glance.' },
            { title: 'Timeless Quality', icon: '⏳', description: 'Our collection is timeless, made with materials that stand the test of time.' }
          ].map((card, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-3xl bg-white shadow-xl border-2 border-[#e5e5e5] hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-medium text-black">{card.title}</h3>
              <p className="text-lg text-gray-700 mt-4">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Art Section with Mouse Hover Effects */}
      <section className="py-40 bg-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-cover rounded-lg overflow-hidden w-full h-[400px] bg-[url('https://linktoyourimage.com')]"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
              <p className="absolute bottom-6 left-6 text-white text-xl font-semibold group-hover:text-opacity-100 transition-all">
                Artwork Title
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Handwritten Quote Section */}
      <section className="py-32 px-6 md:px-20 bg-[#111111] text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-5xl font-serif italic text-white">
            "Every canvas is a journey of self-expression."
          </h3>
          <p className="mt-6 text-lg">- Founder, John Doe</p>
        </motion.div>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="py-32 px-6 md:px-20 bg-[#1c1c1c] text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <button className="bg-[#ff6600] text-black px-8 py-4 rounded-full hover:bg-[#e55c00] transition-all duration-300">
            Explore Our Collection
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
