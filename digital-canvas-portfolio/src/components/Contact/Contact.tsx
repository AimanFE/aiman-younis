import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${props => props.theme.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: ${props => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  text-align: center;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const ContactValue = styled.p`
  color: ${props => props.theme.textSecondary};
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: '☎',
      label: 'Phone',
      value: '+(972) 52-7979498',
      href: 'tel:+972527979498'
    },
    {
      icon: '✉',
      label: 'Email',
      value: 'Aiman.Younis4@gmail.com',
      href: 'mailto:Aiman.Younis4@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/aimanyounis4',
      href: 'https://linkedin.com/in/aimanyounis4'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/AimanFe',
      href: 'https://github.com/AimanFe'
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </Title>
        <ContactInfo>
          {contactItems.map((item, index) => (
            <ContactCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.05
              }}
            >
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactLabel>{item.label}</ContactLabel>
              <ContactValue>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </ContactValue>
            </ContactCard>
          ))}
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact;