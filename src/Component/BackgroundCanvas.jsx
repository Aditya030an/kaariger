import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function BackgroundCanvas() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
