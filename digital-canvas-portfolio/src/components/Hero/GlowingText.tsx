import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GlowingTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  span {
    position: relative;
    display: inline-block;
    color: ${props => props.theme.text};
    text-shadow: 
      0 0 10px ${props => props.theme.primary},
      0 0 20px ${props => props.theme.primary},
      0 0 30px ${props => props.theme.primary};
    animation: glow 3s ease-in-out infinite alternate;
    will-change: text-shadow;
    
    @keyframes glow {
      from {
        text-shadow: 
          0 0 8px ${props => props.theme.primary},
          0 0 16px ${props => props.theme.primary},
          0 0 24px ${props => props.theme.primary};
      }
      to {
        text-shadow: 
          0 0 12px ${props => props.theme.primary},
          0 0 24px ${props => props.theme.primary},
          0 0 36px ${props => props.theme.primary};
      }
    }
  }
`;

interface GlowingTextProps {
  text: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.4,
        duration: 0.6
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 120,
        duration: 0.4
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 120,
        duration: 0.4
      },
    },
  };

  return (
    <GlowingTitle
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: "0.5rem" }}
        >
          {word}
        </motion.span>
      ))}
    </GlowingTitle>
  );
};

export default GlowingText;