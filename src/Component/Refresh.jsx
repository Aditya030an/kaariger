


import { motion } from "framer-motion";
import jua from './photos/jua3.png';
import cinema from './photos/cinema.jpg';
import music from './photos/music.png';
import canvas from './photos/canvas.png';

const newReleases = [
  {
    title: "DIY Rainbow Wall Clock",
    category: "Canvas Craft",
    image: jua,
    snippet: "Add a burst of color and personality to your studio wall.",
  },
  {
    title: "Printable Spring Party Hats",
    category: "Art Printables",
    image: cinema,
    snippet: "Celebrate art in every form with custom cutouts and patterns.",
  },
  {
    title: "Ikea Storage Cube Covers",
    category: "Textile & Design",
    image: music,
    snippet: "Textile makeover meets utility and charm.",
  },
  {
    title: "Vintage Poster Wall Kit",
    category: "Decor Prints",
    image: canvas,
    snippet: "Bring your walls to life with nostalgic charm.",
  },
  {
    title: "Floral Sketch Frame",
    category: "Sketch Art",
    image: cinema,
    snippet: "Minimalist and floral, perfect for modern spaces.",
  },
  {
    title: "Modern Boho Macrame",
    category: "Home Decor",
    image: jua,
    snippet: "Textured wall art that speaks volumes.",
  },
];

export default function NewReleases() {
  return (
    <section className="py-20 bg-[url('/canvas.png')] bg-repeat bg-[#fdfaf6]">
      <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-bold font-[Amita] text-center text-[#3a2e1f] mb-14">
  ‘ताज़ा माल’ – Our Fresh Releases
</h2>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto">
          <div className="flex gap-10 w-max pr-6">
            {newReleases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#fff9f2] border-4 border-[#d2b48c] rounded-[2rem] shadow-lg overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all min-w-[340px] max-w-[340px]"
              >
                <img
                  src="/brushstroke.svg"
                  className="absolute top-0 right-0 w-20 opacity-30 pointer-events-none"
                  alt=""
                />
                <div className="h-80 w-full overflow-hidden rounded-t-[1.6rem] border-b-4 border-[#d2b48c] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#f4e2d8] text-[#513d2c] font-mono text-xs px-3 py-1 rounded-full shadow">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#3e2c1b] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5c4631] leading-relaxed">{item.snippet}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-block bg-[#6a4e3a] text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-[#5a4031] transition-all duration-300"
                  >
                    Explore Piece →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}