import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* Floating Sphere */}
      <mesh position={[0, 1, 0]} scale={[1, 1, 1]}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FFA500" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Floating Cube */}
      <mesh position={[-2, 0, 0]} scale={[1, 1, 1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.1} />
      </mesh>
      {/* Floating Cylinder */}
      <mesh position={[2, 0, 0]} scale={[1, 1, 1]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#FFA500" metalness={0.7} roughness={0.3} />
      </mesh>
    </Canvas>
  );
};

export default FloatingElements;