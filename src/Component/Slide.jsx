import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carsoul from './photos/slide.png';
import carsoul1 from './photos/slide6.png';
import carsoul2 from './photos/slide2.png';
import carsoul3 from './photos/slide4.png';
import carsoul4 from './photos/slide3.jpeg';

const cards = [
  { title: "MARRAKECH MERZOUGA", subtitle: "Sahara Desert - Morocco", image: carsoul },
  { title: "YOSEMITE NATIONAL PARK", subtitle: "Sierra Nevada - USA", image: carsoul1 },
  { title: "LOS LANCES BEACH", subtitle: "Tarifa - Spain", image: carsoul2 },
  { title: "GÖREME VALLEY", subtitle: "Cappadocia - Turkey", image: carsoul3 },
  { title: "NAGANO PREFECTURE", subtitle: "Japan Alps", image: carsoul4 },
];

export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className="relative h-screen w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeCard.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white">
        <div className="text-2xl font-light">{activeCard.subtitle}</div>
        <div className="text-6xl font-bold">{activeCard.title}</div>

        <div className="mt-12 flex gap-4 overflow-x-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`w-48 h-72 rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 ${
                idx === activeIndex
                  ? "scale-105 ring-4 ring-white bg-white bg-opacity-20"
                  : "bg-white bg-opacity-10"
              }`}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.08 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <div className="h-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
              <div className="p-3 text-white">
                <div className="text-xs uppercase">{card.subtitle}</div>
                <div className="text-lg font-semibold">{card.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
