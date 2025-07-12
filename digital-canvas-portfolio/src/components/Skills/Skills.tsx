import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillTag = styled(motion.span)`
  background: ${props => props.theme.primaryGradient};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`;

const AchievementSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const AchievementCard = styled(motion.div)`
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;
  padding: 2rem;
  margin: 0 auto;
  max-width: 600px;
  box-shadow: ${props => props.theme.cardShadow};
`;

const AchievementTitle = styled.h3`
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const AchievementText = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend Core",
      skills: ["React", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Frontend Tools & Testing",
      skills: ["Webpack", "Jest", "Git", "npm/yarn", "CI/CD", "ESLint"]
    },
    {
      title: "Backend & Integration",
      skills: ["Node.js", "Express", "Java", "RESTful APIs", "Microservices"]
    },
    {
      title: "Enterprise Systems",
      skills: ["CRM Platforms", "Billing Systems", "ERP Integration", "Docker", "Kubernetes", "Jenkins", "SQL", "NoSQL"]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Frontend Mastery
        </Title>
        
        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 5
              }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)"
                    }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <AchievementSection>
          <AchievementCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 40px rgba(246, 173, 85, 0.2)"
            }}
          >
            <AchievementTitle>🏆 Recognition & Frontend Excellence</AchievementTitle>
            <AchievementText>
              Awarded Amdocs Certificate of Recognition as 1 of 70 company-wide recipients for "Learning, Owning, Sharing, and Leading" • 
              5+ years delivering large-scale solutions serving millions of users with React & TypeScript expertise • 
              Recognized for fastest company onboarding and outstanding technical performance • 
              This portfolio demonstrates advanced frontend skills through real-world implementation
            </AchievementText>
          </AchievementCard>
        </AchievementSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;