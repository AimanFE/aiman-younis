import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useTheme } from '../../contexts/ThemeContext';

const ParticleSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${props => props.theme.background};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const InteractionHint = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  pointer-events: none;
  z-index: 5;
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const ParticlePlayground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const { theme } = useTheme();

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 4,  // More initial velocity
    vy: (Math.random() - 0.5) * 4,
    radius: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 70%, ${theme === 'light' ? '50%' : '60%'})`
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particles (minimal amount)
    for (let i = 0; i < 5; i++) {
      particlesRef.current.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    const animate = () => {
      // Clear canvas properly without flashing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const updatedParticles = particlesRef.current.map(particle => {
          // Add random wandering force
          particle.vx += (Math.random() - 0.5) * 0.2;
          particle.vy += (Math.random() - 0.5) * 0.2;

          // Mouse attraction (only when mouse is moving)
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.4;
            particle.vy += (dy / distance) * force * 0.4;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Apply gentle friction to prevent infinite acceleration
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -0.8;
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -0.8;
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));
          }

          // Draw particle with subtle glow (optimized)
          ctx.save();
          ctx.globalAlpha = 0.8;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Subtle glow effect
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          return particle;
        });

        particlesRef.current = updatedParticles;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, theme]);

  return (
    <ParticleSection id="particle-playground">
      <ParticleCanvas ref={canvasRef} />
      
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Interactive Particle System
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Move your mouse around to interact with the particles. Watch as they respond to your cursor with realistic physics, attraction forces, and beautiful trails.
        </Description>
      </Container>

      <InteractionHint
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        🎮 Move your mouse to interact with particles
      </InteractionHint>
    </ParticleSection>
  );
};

export default ParticlePlayground;