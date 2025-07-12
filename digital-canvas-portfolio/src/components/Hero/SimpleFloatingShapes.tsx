import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(90deg); }
  50% { transform: translate(-5px, -25px) rotate(180deg); }
  75% { transform: translate(-15px, -10px) rotate(270deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(360deg); }
  25% { transform: translate(-12px, 20px) rotate(270deg); }
  50% { transform: translate(8px, 15px) rotate(180deg); }
  75% { transform: translate(18px, -8px) rotate(90deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(15px, -20px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-10px, 10px) rotate(240deg) scale(0.9); }
`;

const ShapesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingShape = styled(motion.div)<{
  $size: number;
  $color: string;
  $left: string;
  $top: string;
  $animation: string;
  $duration: string;
}>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: ${props => props.$size * 0.2}px;
  left: ${props => props.$left};
  top: ${props => props.$top};
  opacity: 0.1;
  animation: ${props => {
    switch (props.$animation) {
      case 'float1': return float1;
      case 'float2': return float2;
      case 'float3': return float3;
      default: return float1;
    }
  }} ${props => props.$duration} ease-in-out infinite;
  box-shadow: 0 0 20px ${props => props.$color}40;
  will-change: transform;
  
  @media (max-width: 768px) {
    opacity: 0.15;
    box-shadow: 0 0 25px ${props => props.$color}60;
  }
`;

const shapes = [
  { size: 60, color: '#667eea', left: '10%', top: '20%', animation: 'float1', duration: '8s' },
  { size: 80, color: '#764ba2', left: '85%', top: '15%', animation: 'float2', duration: '10s' },
  { size: 45, color: '#f6ad55', left: '15%', top: '70%', animation: 'float3', duration: '12s' },
  { size: 70, color: '#4299e1', left: '80%', top: '75%', animation: 'float1', duration: '9s' },
  { size: 35, color: '#667eea', left: '50%', top: '10%', animation: 'float2', duration: '11s' },
  { size: 55, color: '#764ba2', left: '25%', top: '45%', animation: 'float3', duration: '7s' },
];

const SimpleFloatingShapes: React.FC = () => {
  return (
    <ShapesContainer>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          $size={shape.size}
          $color={shape.color}
          $left={shape.left}
          $top={shape.top}
          $animation={shape.animation}
          $duration={shape.duration}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </ShapesContainer>
  );
};

export default SimpleFloatingShapes;