import { useEffect } from 'react';
import gsap from 'gsap';
import jua from './photos/Jua1.png';

const Landing = () => {
  useEffect(() => {
    gsap.from('.hero-heading span', {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power4.out',
    });

    gsap.from('.center-image', {
      scale: 0.9,
      opacity: 0,
      duration: 2,
      delay: 0.8,
      ease: 'expo.out',
    });

    gsap.from('.float-image', {
      y: 30,
      rotation: 4,
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fdfcfb] overflow-hidden font-serif text-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white opacity-5 blur-3xl rounded-full pointer-events-none" />

      {/* Hero Heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-20">
        <h1 className="hero-heading text-[clamp(2rem,5vw,5rem)] font-semibold tracking-tight leading-tight text-gray-800">
          <span className="inline-block">Land</span>{' '}
          <span className="inline-block text-red-600 italic">of</span>{' '}
          <span className="inline-block relative text-black drop-shadow-md">
            Beau
            <span className="absolute -top-2 -right-1 w-2 h-2 border border-black rounded-full"></span>
            ty
          </span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-500 tracking-wide">
          A place where every frame is a masterpiece.
        </p>
      </div>

      {/* Centerpiece Image */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="center-image rounded-3xl overflow-hidden shadow-xl w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
          <img src={jua} alt="Art" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={jua}
            alt=""
            className={`float-image absolute w-[130px] h-[90px] object-cover rounded-xl shadow-md ${
              i % 2 === 0
                ? `top-[${120 + i * 40}px] left-[${20 + i * 30}px]`
                : `bottom-[${100 + i * 40}px] right-[${40 + i * 30}px]`
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
