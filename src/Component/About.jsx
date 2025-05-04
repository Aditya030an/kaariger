

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import bg from "./photos/canvas.png"; // Optional background
import jua from './photos/jua2.png';
import cinema from './photos/cinema.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPremium() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-[#f9f5f0] overflow-hidden px-6 py-20"
    //   style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Floating Paint Effect */}
      <img
        src={jua}
        className="absolute top-0 left-0 w-64 opacity-20 z-0 rotate-[25deg] pointer-events-none"
        alt="Paint Stroke"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Image Side */}
        <div
          ref={imageRef}
          className="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white"
        >
          <img
            src={cinema}
            alt="Art Studio Showcase"
            className="object-cover w-full h-[500px] hover:scale-105 transition-transform duration-[1.2s] ease-in-out"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#e9dccb55] to-[#ffffff22] backdrop-blur-[4px] rounded-[3rem]"></div>
        </div>

        {/* Text Side */}
        <div ref={textRef} className="text-[#382619]">
          <h2 className="text-6xl lg:text-7xl font-[Amita] mb-8 leading-tight">
          Hello Art Premi’s…. 
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed font-light tracking-wide mb-6 text-[#5c4430]">
          Kaarigar and Co. stands for raw creativity and constant evolution.
          Every piece here is part of a journey: growing, learning, and staying true to the soul of the craft. Hoping to make your spaces lively and soulful one art piece at a time…..
          </p>
         

          <button className="mt-8 inline-block bg-[#3a2e1f] hover:bg-[#2a2217] text-white px-6 py-3 rounded-full text-md shadow-lg tracking-wide transition-all duration-300">
            Visit Our World →
          </button>
        </div>
      </div>
    </section>
  );
}