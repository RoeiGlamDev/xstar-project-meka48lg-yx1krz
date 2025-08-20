'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Add any animations or effects here if needed
  }, []);

  return (
    <Canvas style={{ height: '500px', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      <mesh ref={modelRef}>
        {/* Replace with your 3D model */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;