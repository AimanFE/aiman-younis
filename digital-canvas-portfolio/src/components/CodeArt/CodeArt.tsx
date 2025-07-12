import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SystemsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${props => props.theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  text-align: center;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SystemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CollaborationPanel = styled(motion.div)`
  background: #1a1f36;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.cardShadow};
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  margin-bottom: 1rem;
`;

const EditorDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const CollaboratorsList = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Collaborator = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`;

const CodeEditor = styled.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #e2e8f0;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

const CodeLine = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'delay'
})<{ delay: number }>`
  margin-bottom: 0.4rem;
  position: relative;
  
  .keyword { color: #667eea; }
  .string { color: #f6ad55; }
  .function { color: #4299e1; }
  .comment { color: #a0aec0; font-style: italic; }
  .number { color: #f093fb; }
  .api { color: #48bb78; }
  .method { color: #ed8936; }
`;

const TypingCursor = styled(motion.span)<{ color: string }>`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: ${props => props.color};
  margin-left: 2px;
  vertical-align: text-bottom;
`;

const SystemsDiagram = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.cardShadow};
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const ServiceNode = styled(motion.div)<{ x: number; y: number; color: string }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: 80px;
  height: 80px;
  background: ${props => props.color};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`;

const ConnectionSVG = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FlowDot = styled(motion.circle)`
  fill: #667eea;
  filter: drop-shadow(0 0 8px #667eea);
`;

const StatusIndicator = styled(motion.div)<{ status: 'success' | 'warning' | 'error' }>`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => 
    props.status === 'success' ? '#48bb78' :
    props.status === 'warning' ? '#ed8936' : '#f56565'
  };
  box-shadow: 0 0 10px ${props => 
    props.status === 'success' ? '#48bb78' :
    props.status === 'warning' ? '#ed8936' : '#f56565'
  };
`;

const SystemsInHarmony: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentLine, setCurrentLine] = useState(0);
  const [activeServices, setActiveServices] = useState<string[]>([]);
  const [typingUser, setTypingUser] = useState(0);
  const [showDataFlow, setShowDataFlow] = useState(false);

  const collaborators = useMemo(() => [
    { name: 'Alex', color: '#667eea', initial: 'A' },
    { name: 'Sam', color: '#f093fb', initial: 'S' },
    { name: 'Jordan', color: '#48bb78', initial: 'J' }
  ], []);

  const codeLines = useMemo(() => [
    '// Real-time collaboration system',
    '<span class="comment">// Alex is typing...</span>',
    '<span class="keyword">const</span> <span class="api">websocket</span> = <span class="keyword">new</span> <span class="function">WebSocket</span>(<span class="string">"wss://api.example.com"</span>);',
    '',
    '<span class="comment">// Sam added API integration</span>',
    '<span class="keyword">const</span> <span class="function">fetchUserData</span> = <span class="keyword">async</span> (userId) => {',
    '  <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="method">fetch</span>(<span class="string">`/api/users/${userId}`</span>);',
    '  <span class="keyword">return</span> <span class="keyword">await</span> response.<span class="method">json</span>();',
    '};',
    '',
    '<span class="comment">// Jordan implementing error handling</span>',
    '<span class="keyword">const</span> <span class="function">handleApiError</span> = (error) => {',
    '  console.<span class="method">error</span>(<span class="string">"API Error:"</span>, error);',
    '  <span class="comment">// Retry logic with exponential backoff</span>',
    '  <span class="function">setTimeout</span>(() => <span class="function">retryRequest</span>(), <span class="number">1000</span>);',
    '};',
    '',
    '<span class="comment">// System integration complete! →</span>'
  ], []);

  const services = useMemo(() => [
    { name: 'Frontend', x: 15, y: 20, color: '#667eea', status: 'success' as const },
    { name: 'API Gateway', x: 35, y: 20, color: '#f093fb', status: 'success' as const },
    { name: 'Backend Service', x: 55, y: 20, color: '#9f7aea', status: 'success' as const },
    { name: 'Auth Service', x: 75, y: 20, color: '#48bb78', status: 'warning' as const },
    { name: 'Database', x: 75, y: 65, color: '#ed8936', status: 'success' as const },
    { name: 'Cache', x: 35, y: 65, color: '#f6ad55', status: 'success' as const }
  ], []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setCurrentLine(prev => prev + 1);
        setTypingUser(prev => (prev + 1) % collaborators.length);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [inView, currentLine, codeLines, collaborators.length]);

  // Activate services progressively
  useEffect(() => {
    if (!inView) return;

    const timers = services.map((_, index) => 
      setTimeout(() => {
        setActiveServices(prev => [...prev, services[index].name]);
      }, (index + 1) * 1000)
    );

    const dataFlowTimer = setTimeout(() => {
      setShowDataFlow(true);
    }, 3000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(dataFlowTimer);
    };
  }, [inView, services]);

  const flowSequence = useMemo(() => ({
    step1: { from: services[0], to: services[1] }, // Frontend → API Gateway
    step2: { from: services[1], to: services[2] }, // API Gateway → Backend Service
    step3: { from: services[2], to: services[3] }, // Backend → Auth Service
    step4: { from: services[3], to: services[2] }, // Auth → Backend (auth response)
    step5: [
      { from: services[2], to: services[4] }, // Backend → Database
      { from: services[2], to: services[5] }  // Backend → Cache
    ]
  }), [services]);

  return (
    <SystemsSection id="code-art" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Systems in Harmony
        </Title>
        
        <SystemsContainer>
          <CollaborationPanel
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EditorHeader>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <EditorDot color="#ff5f57" />
                <EditorDot color="#ffbd2e" />
                <EditorDot color="#28ca42" />
                <span style={{ marginLeft: '1rem', color: '#a0aec0', fontSize: '0.9rem' }}>
                  real-time-collaboration.js
                </span>
              </div>
              <CollaboratorsList>
                {collaborators.map((collab, index) => (
                  <Collaborator 
                    key={collab.name} 
                    color={collab.color}
                    style={{ 
                      opacity: index <= typingUser ? 1 : 0.3,
                      transform: index === typingUser ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {collab.initial}
                  </Collaborator>
                ))}
              </CollaboratorsList>
            </EditorHeader>
            <CodeEditor>
              {codeLines.slice(0, currentLine).map((line, index) => (
                <CodeLine
                  key={index}
                  delay={index * 0.1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span dangerouslySetInnerHTML={{ __html: line }} />
                  {index === currentLine - 1 && (
                    <TypingCursor
                      color={collaborators[typingUser]?.color || '#667eea'}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </CodeLine>
              ))}
            </CodeEditor>
          </CollaborationPanel>

          <SystemsDiagram
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Service Nodes */}
            {services.map((service, index) => (
              <ServiceNode
                key={service.name}
                x={service.x}
                y={service.y}
                color={service.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={activeServices.includes(service.name) ? {
                  scale: 1,
                  opacity: 1
                } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2
                }}
                whileHover={{ scale: 1.1 }}
              >
                {service.name}
                <StatusIndicator
                  status={service.status}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </ServiceNode>
            ))}
            
            {/* Data Flow Dots */}
            {showDataFlow && (
              <ConnectionSVG
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {/* Step 1: Frontend → API Gateway */}
                <FlowDot
                  key="step1"
                  r="6"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [`${flowSequence.step1.from.x}%`, `${flowSequence.step1.to.x}%`],
                    cy: [`${flowSequence.step1.from.y}%`, `${flowSequence.step1.to.y}%`]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    times: [0, 0.05, 0.15, 0.2],
                    ease: "easeInOut"
                  }}
                />

                {/* Step 2: API Gateway → Backend Service */}
                <FlowDot
                  key="step2"
                  r="5"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    cx: [`${flowSequence.step2.from.x}%`, `${flowSequence.step2.from.x}%`, `${flowSequence.step2.to.x}%`],
                    cy: [`${flowSequence.step2.from.y}%`, `${flowSequence.step2.from.y}%`, `${flowSequence.step2.to.y}%`]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    times: [0, 0.15, 0.2, 0.35, 0.4],
                    ease: "easeInOut"
                  }}
                />

                {/* Step 3: Backend → Auth Service */}
                <FlowDot
                  key="step3"
                  r="4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    cx: [`${flowSequence.step3.from.x}%`, `${flowSequence.step3.from.x}%`, `${flowSequence.step3.to.x}%`],
                    cy: [`${flowSequence.step3.from.y}%`, `${flowSequence.step3.from.y}%`, `${flowSequence.step3.to.y}%`]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    times: [0, 0.35, 0.4, 0.55, 0.6],
                    ease: "easeInOut"
                  }}
                />

                {/* Step 4: Auth → Backend (response) */}
                <FlowDot
                  key="step4"
                  r="3"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    cx: [`${flowSequence.step4.from.x}%`, `${flowSequence.step4.from.x}%`, `${flowSequence.step4.to.x}%`],
                    cy: [`${flowSequence.step4.from.y}%`, `${flowSequence.step4.from.y}%`, `${flowSequence.step4.to.y}%`]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    times: [0, 0.55, 0.6, 0.7, 0.75],
                    ease: "easeInOut"
                  }}
                />

                {/* Step 5: Backend → Database & Cache (parallel) */}
                {flowSequence.step5.map((flow, index) => {
                  const x1 = `${flow.from.x}%`;
                  const y1 = `${flow.from.y}%`;
                  const x2 = `${flow.to.x}%`;
                  const y2 = `${flow.to.y}%`;
                  
                  return (
                    <FlowDot
                      key={`step5-${index}`}
                      r="4"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0, 1, 1, 0],
                        cx: [x1, x1, x2],
                        cy: [y1, y1, y2]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        times: [0, 0.75, 0.8 + (index * 0.025), 0.9 + (index * 0.025), 0.95 + (index * 0.025)],
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </ConnectionSVG>
            )}
          </SystemsDiagram>
        </SystemsContainer>
      </Container>
    </SystemsSection>
  );
};

export default SystemsInHarmony;