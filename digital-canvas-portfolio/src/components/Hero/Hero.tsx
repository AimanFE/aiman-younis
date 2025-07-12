import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';
import SimpleFloatingShapes from './SimpleFloatingShapes';
import GlowingText from './GlowingText';
import ProfileImage from './ProfileImage';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${props => props.theme.background};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: ${props => props.theme.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    line-height: 1.6;
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${props => props.theme.primaryGradient};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    transform: translateX(-50%) scale(0.9);
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    transform: translateX(-50%) scale(0.8);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 40px;
    margin-left: -12px;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 12px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    height: 8px;
    margin-left: -2px;
    background: ${props => props.theme.primary};
    border-radius: 2px;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
`;

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection id="hero">
      <MatrixRain />
      <SimpleFloatingShapes />
      <ProfileImage />
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aiman Younis
        </Title>
        <GlowingText text="Frontend Developer" />
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting Beautiful Interactive Websites Where AI-Powered Innovation Creates Digital{' '}
          <motion.a
            href="#particle-playground"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              fontWeight: 'bold',
              borderBottom: '2px solid transparent',
              borderImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1',
              borderImageSlice: 1
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 8px rgba(102, 126, 234, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#particle-playground')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Magic
          </motion.a>
        </Subtitle>
        <CTAButton
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </CTAButton>
      </ContentWrapper>
      <ScrollIndicator
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </HeroSection>
  );
};

export default Hero;