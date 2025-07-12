import React, { Suspense, lazy } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import styled from 'styled-components';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero/Hero'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const CodeArt = lazy(() => import('./components/CodeArt/CodeArt'));
const ParticlePlayground = lazy(() => import('./components/ParticlePlayground/ParticlePlayground'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Header = lazy(() => import('./components/Header/Header'));
const ThemeToggle = lazy(() => import('./components/ThemeToggle/ThemeToggle'));

const LoadingFallback = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

function AppContent() {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        <AppContainer>
          <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
            <Header />
            <ThemeToggle />
            <Hero />
            <Skills />
            <Experience />
            <CodeArt />
            <ParticlePlayground />
            <Contact />
          </Suspense>
        </AppContainer>
      </AnimatePresence>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;