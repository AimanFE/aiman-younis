import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import profileImage from '../../assets/profile.jpg';

const ProfileContainer = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: 5;
  
  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }
`;

const ProfileWrapper = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const GlassBorder = styled(motion.div)`
  position: absolute;
  inset: -10px;
  background: ${props => props.theme.glassBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  border: 2px solid ${props => props.theme.border};
  border-radius: 50%;
  box-shadow: 
    ${props => props.theme.cardShadow},
    inset 0 0 20px rgba(102, 126, 234, 0.1);
`;

const InnerGlow = styled(motion.div)`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${props => props.theme.primary},
    ${props => props.theme.secondary},
    ${props => props.theme.accent},
    ${props => props.theme.primary}
  );
  opacity: 0.3;
  animation: rotate 8s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  background: ${props => props.theme.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${props => props.theme.primary};
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const PlaceholderText = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;


interface ProfileImageComponentProps {
  src?: string;
  alt?: string;
}

const ProfileImageComponent: React.FC<ProfileImageComponentProps> = ({ 
  src = profileImage, 
  alt = "Aiman Younis - Full Stack Developer" 
}) => {
  const mousePosition = useMousePosition();
  
  // Calculate subtle movement based on mouse position
  const moveX = (mousePosition.x / window.innerWidth - 0.5) * 20;
  const moveY = (mousePosition.y / window.innerHeight - 0.5) * 20;

  return (
    <ProfileContainer
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateY: 0,
        x: moveX,
        y: moveY
      }}
      transition={{ 
        duration: 1.2, 
        delay: 1.5,
        x: { type: "spring", stiffness: 100, damping: 10 },
        y: { type: "spring", stiffness: 100, damping: 10 }
      }}
    >
      <ProfileWrapper
        whileHover={{ 
          scale: 1.1,
          rotateY: 15,
          z: 50
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <InnerGlow />
        <GlassBorder
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <ProfileImageContainer>
          {src ? (
            <ProfileImage src={src} alt={alt} />
          ) : (
            <PlaceholderText>
              Add your profile image to src/assets/profile.jpg
            </PlaceholderText>
          )}
        </ProfileImageContainer>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default ProfileImageComponent;