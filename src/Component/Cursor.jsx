import React, { useState, useEffect } from "react";
import brush from './photos/paint.png';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 cursor-none">
      {/* Sample content */}
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">Custom Brush Cursor Demo</h1>
        <p className="text-lg text-gray-700">
          Move your mouse to see the custom brush image follow the cursor.
        </p>
        <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Example Button
        </button>
      </div>

      {/* Brush cursor */}
      <img
        src={brush}
        alt="brush"
        className="fixed w-10 h-10 z-[9999] pointer-events-none transition-transform duration-75 ease-linear"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Cursor;