'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
  width: 100%;
  max-width: 800px; 

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 20px;
  padding: 20px;
  color: #fff;

  background: #0d0d0d;
  position: relative;
  overflow: hidden;
  box-shadow: yellow 0px 20px 30px -10px;

  border: 1px solid #F8DE22;

  transition: 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: yellow;
    border-radius : 50%;
  }

  @media (max-width: 1024px) {
    padding: 18px;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    padding: 16px;
    gap: 16px;
  }
`;


export const BoxImage = styled.div`
  width: 100%;
  height: 200px; 
  overflow: hidden;
  border-radius: 12px;

  img {
    object-fit: cover;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    height: 180px;
  }
`;

export const BoxInformation = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 28px;
    }

    @media (max-width: 640px) {
        gap: 20px;
    }
`;

export const Name = styled.h1`
    display: flex;
    gap: 10px;
    font-size: 24px;    
    color: #F8DE22;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 21px;
        flex-wrap: wrap;
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 19px;
    }
`;

export const TechIcons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 10px;
  background-color: #FFC81E;
  border-radius: 20px;
`;

export const TechIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;

  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;


export const BoxLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;