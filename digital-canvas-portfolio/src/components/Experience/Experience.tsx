import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${props => props.theme.background};
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

const Timeline = styled.div`
  position: relative;
`;

const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${props => props.theme.primary};
  transform: translateX(-50%);
  transform-origin: top;
  
  @media (max-width: 768px) {
    left: 2rem;
  }
`;

const TimelineItem = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'isLeft'
})<{ isLeft: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  ${props => props.isLeft ? `
    flex-direction: row;
    text-align: left;
  ` : `
    flex-direction: row-reverse;
    text-align: left;
  `}
  
  @media (max-width: 768px) {
    margin-left: 4rem;
  }
`;

const ExperienceCard = styled(motion.div)`
  flex: 1;
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  margin: 0 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.textSecondary};
    position: relative;
    padding-left: 1rem;
    
    &::before {
      content: '•';
      color: ${props => props.theme.primary};
      position: absolute;
      left: 0;
    }
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 1.5rem;
  }
`;

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      company: "Amdocs",
      title: "Scrum Master & Software Engineer",
      period: "July 2023 - Present",
      description: [
        "Led end-to-end delivery of complex custom telecom CRM project over 18 months, serving 2+ million customers",
        "Managed cross-functional development team of 6 engineers while driving frontend architecture decisions using React & TypeScript",
        "Bridged technical and business requirements by training customer teams on frontend interfaces and system functionality",
        "Delivered mission-critical frontend features under tight deadlines while maintaining high code quality and system reliability"
      ]
    },
    {
      company: "Amdocs",
      title: "Frontend Developer",
      period: "Dec 2021 - July 2023 | Aug 2019 - March 2021",
      description: [
        "Developed scalable frontend solutions using React, Redux, and TypeScript for custom and core CRM platforms",
        "Led end-to-end feature development from requirements analysis through deployment and customer training",
        "Architected complex integrations between frontend components and backend services, handling high-volume data processing",
        "Specialized in CRM client-side infrastructure development with focus on performance and user experience"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience Timeline
        </Title>
        <Timeline>
          <TimelineLine
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              isLeft={index % 2 === 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <ExperienceCard
                whileHover={{ 
                  y: -5,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CompanyName>{exp.company}</CompanyName>
                <JobTitle>{exp.title}</JobTitle>
                <Period>{exp.period}</Period>
                <Description>
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </Description>
              </ExperienceCard>
              <TimelineDot />
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;