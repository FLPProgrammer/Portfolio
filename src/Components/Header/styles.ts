import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    box-shadow: 0 0 80px rgba(255, 215, 0, 0.15);
    background: linear-gradient(
  135deg,
  #0a0a0a 0%,
  #1c1c1c 35%,
  #a67c2d 55%,
  #ffd700 70%,
  #a67c2d 85%,
  #0a0a0a 100%
);
    font-family: 'DM Sans', sans-serif;
    padding: 20px;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        padding: 16px 14px;
        gap: 16px;
        margin-bottom: 32px;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
        padding: 12px;
        gap: 14px;
        margin-bottom: 24px;
    }
`

export const IconBox = styled.div`
    max-width: 200px;

    @media (max-width: 1024px) {
        max-width: 160px;
    }

    @media (max-width: 640px) {
        max-width: none;
        display: flex;
        justify-content: center;
    }
`;

export const MenuBox = styled.div`
    display: flex;
    gap: 40px;
    max-width: 300px;

    @media (max-width: 1024px) {
        gap: 22px;
        max-width: none;
        flex: 1;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 640px) {
        gap: 14px 20px;
        justify-content: center;
        width: 100%;
    }
`;

export const ButtonBox = styled.div`
    max-width: 250px;

    @media (max-width: 1024px) {
        max-width: 220px;
    }

    @media (max-width: 640px) {
        max-width: none;
        width: 100%;
        display: flex;
        justify-content: center;

        a {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
`;

export const MotionImage = styled(motion(Image))`
    @media (max-width: 1024px) {
        max-width: 130px;
        height: auto;
    }

    @media (max-width: 640px) {
        max-width: 100px;
    }
`;