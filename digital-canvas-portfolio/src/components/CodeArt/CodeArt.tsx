import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodeArtSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${props => props.theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CodeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TerminalWrapper = styled(motion.div)`
  background: #1a1f36;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.cardShadow};
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  margin-bottom: 1rem;
`;

const TerminalDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const CodeBlock = styled.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e2e8f0;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const CodeLine = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'delay'
})<{ delay: number }>`
  margin-bottom: 0.5rem;
  
  .keyword { color: #667eea; }
  .string { color: #f6ad55; }
  .function { color: #4299e1; }
  .comment { color: #a0aec0; font-style: italic; }
  .number { color: #f093fb; }
`;

const VisualOutput = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const AnimatedShape = styled(motion.div).attrs<{ color: string; size: number; x: number; y: number }>(props => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    background: props.color,
    left: `${props.x}%`,
    top: `${props.y}%`,
  }
}))`
  position: absolute;
  border-radius: 50%;
`;

const CodeArt: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentLine, setCurrentLine] = useState(0);
  const [showParticles, setShowParticles] = useState(false);

  const codeLines = useMemo(() => [
    '// Creating beautiful animations with React',
    'const <span class="function">createParticles</span> = () => {',
    '  <span class="keyword">const</span> particles = [];',
    '  <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < <span class="number">50</span>; i++) {',
    '    particles.push({',
    '      x: <span class="function">Math.random</span>() * <span class="number">100</span>,',
    '      y: <span class="function">Math.random</span>() * <span class="number">100</span>,',
    '      color: <span class="string">`hsl($&#123;Math.random() * 360&#125;, 70%, 60%)`</span>,',
    '      size: <span class="function">Math.random</span>() * <span class="number">20</span> + <span class="number">10</span>',
    '    });',
    '  }',
    '  <span class="keyword">return</span> particles;',
    '};',
    '',
    '<span class="comment">// This code generates the animation you see →</span>'
  ], []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setCurrentLine(prev => prev + 1);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [inView, currentLine, codeLines]);

  // Separate effect to trigger particles independently
  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 2000); // Show particles after 2 seconds

    return () => clearTimeout(timer);
  }, [inView]);

  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 80,
    y: Math.random() * 80,
    size: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  })), []);

  return (
    <CodeArtSection id="code-art" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Code Meets Art
        </Title>
        
        <CodeContainer>
          <TerminalWrapper
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TerminalHeader>
              <TerminalDot color="#ff5f57" />
              <TerminalDot color="#ffbd2e" />
              <TerminalDot color="#28ca42" />
              <span style={{ marginLeft: '1rem', color: '#a0aec0', fontSize: '0.9rem' }}>
                particle-animation.js
              </span>
            </TerminalHeader>
            <CodeBlock>
              {codeLines.slice(0, currentLine).map((line, index) => (
                <CodeLine
                  key={index}
                  delay={index * 0.1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </CodeBlock>
          </TerminalWrapper>

          <VisualOutput
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {particles.map((particle, index) => (
              <AnimatedShape
                key={particle.id}
                color={particle.color}
                size={particle.size}
                x={particle.x}
                y={particle.y}
                initial={{ scale: 0, opacity: 0 }}
                animate={showParticles ? { 
                  scale: 1, 
                  opacity: 1,
                  x: [particle.x, particle.x + 20, particle.x - 10, particle.x],
                  y: [particle.y, particle.y - 15, particle.y + 10, particle.y]
                } : {}}
                transition={{ 
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </VisualOutput>
        </CodeContainer>
      </Container>
    </CodeArtSection>
  );
};

export default CodeArt;