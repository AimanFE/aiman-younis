import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 2rem;
    right: 1rem;
  }
`;

const ToggleButton = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDark'
})<{ isDark: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${props => props.theme.cardShadow};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ToggleContainer
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <ToggleButton
        isDark={isDark}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <IconWrapper
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? '☽' : '☀'}
        </IconWrapper>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;