import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const HeaderContainer = styled(motion.header).withConfig({
  shouldForwardProp: (prop) => prop !== 'isScrolled'
})<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.isScrolled ? 'blur(20px)' : 'none'};
  background: ${props => props.isScrolled ? props.theme.glassBg : 'transparent'};
  border-bottom: ${props => props.isScrolled ? `1px solid ${props.theme.border}` : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.glassBg};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${props => props.theme.primaryGradient};
  border-radius: 0 2px 2px 0;
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    let ticking = false;
    
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#code-art', label: 'Systems' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Nav>
        <Logo
          onClick={() => scrollToSection('#hero')}
          whileHover={{ scale: 1.05 }}
        >
          AY
        </Logo>
        
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </MobileMenuButton>
      </Nav>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
      
      <ProgressBar
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />
    </HeaderContainer>
  );
};

export default Header;