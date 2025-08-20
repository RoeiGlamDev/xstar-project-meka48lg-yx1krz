import * as THREE from 'three'; // Importing Three.js library
import { Canvas } from '@react-three/fiber'; // Importing Canvas from react-three-fiber
import { useEffect, useRef } from 'react'; // Importing hooks from React

const ThreeUtils = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Reference for the mesh

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01; // Rotate mesh on x-axis
        meshRef.current.rotation.y += 0.01; // Rotate mesh on y-axis
      }
      requestAnimationFrame(animate); // Request next frame
    };
    animate(); // Start animation
  }, []);

  return (
    <Canvas style={{ background: 'white' }}> {/* Canvas with white background */}
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} /> {/* Point light for highlights */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} /> {/* Box geometry for the mesh */}
        <meshStandardMaterial color="orange" /> {/* Orange material for the mesh */}
      </mesh>
    </Canvas>
  );
};

export default ThreeUtils; // Exporting the component as default