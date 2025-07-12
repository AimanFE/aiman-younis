import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Octahedron, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMousePosition } from '../../hooks/useMousePosition';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  rotationSpeed: number;
  shape: 'box' | 'sphere' | 'octahedron' | 'torus';
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, speed, rotationSpeed, shape }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosition = useMousePosition();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Rotation
    meshRef.current.rotation.x += rotationSpeed * delta;
    meshRef.current.rotation.y += rotationSpeed * delta;

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;

    // Subtle mouse interaction (reduced intensity)
    const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
    const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
    
    // Use lerp for smoother mouse movement with reduced intensity
    const targetX = position[0] + mouseX * 0.2;
    const targetZ = position[2] + mouseY * 0.2;
    
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.05;
  });

  const ShapeComponent = () => {
    switch (shape) {
      case 'box':
        return <Box ref={meshRef} args={[1, 1, 1]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0} />
        </Box>;
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.7, 32, 32]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0} />
        </Sphere>;
      case 'octahedron':
        return <Octahedron ref={meshRef} args={[1]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0} />
        </Octahedron>;
      case 'torus':
        return <Torus ref={meshRef} args={[0.7, 0.3, 16, 100]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0} />
        </Torus>;
      default:
        return null;
    }
  };

  return <ShapeComponent />;
};

const FloatingShapes: React.FC = () => {
  const shapes: FloatingShapeProps[] = [
    { position: [-3, 1, -2], color: '#667eea', speed: 1.5, rotationSpeed: 0.5, shape: 'box' },
    { position: [3, -1, -2], color: '#764ba2', speed: 1.2, rotationSpeed: 0.3, shape: 'sphere' },
    { position: [0, 2, -3], color: '#f6ad55', speed: 1.8, rotationSpeed: 0.7, shape: 'octahedron' },
    { position: [-2, -2, -1], color: '#4299e1', speed: 1.0, rotationSpeed: 0.4, shape: 'torus' },
  ];

  return (
    <CanvasContainer>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5, max: 1 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
        {shapes.map((shapeProps, index) => (
          <FloatingShape key={index} {...shapeProps} />
        ))}
      </Canvas>
    </CanvasContainer>
  );
};

export default FloatingShapes;