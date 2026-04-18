import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const blink = keyframes`
  0% { opacity: 1;}
  50% { opacity: 0.3; }
  100% { opacity: 1;}
`;


export const Container = styled.div`
  width: 100%;
  padding: 60px 20px;

  display: flex;
  justify-content: center;

.straight-bar,
.straight-bar2,
.straight-bar3,
.straight-bar4,
.straight-bar5,
.straight-bar6 {
  width: 5px;
  height: 700px;
  background-color: yellow;
  border-radius: 50%;
  margin-left: 40px;
  animation: ${blink} 1s infinite;
  
}

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
    gap: 24px;
    box-sizing: border-box;

    .straight-bar,
    .straight-bar2,
    .straight-bar3,
    .straight-bar4,
    .straight-bar5,
    .straight-bar6 {
      display: none;
    }
  }

  @media (max-width: 640px) {
    padding: 32px 12px;
    gap: 20px;
  }
`;

export const BoxProjects = styled(motion.div)`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  gap: 30px;

  width: 100%;
  max-width: 1200px; 

  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 22px;
    padding: 0 8px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  @media (max-width: 640px) {
    gap: 18px;
    padding: 0;
    grid-template-columns: 1fr;
  }
`;