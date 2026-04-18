import styled  from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 260px;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    border: 2px solid yellow;
    border-radius: 20px;
    padding: 20px;
    color: #fff;

    transition: 0.3s;
    box-shadow: yellow 0px 20px 30px -10px;

    &:hover {
        transform: translate(-10px) scale(1.03);
        border-color: yellow;
        box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
    }

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 100%;
        min-height: 300px;
    }

    @media (max-width: 640px) {
        padding: 16px;
    }
`;

export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Name = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 1024px) {
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 16px;
    }
`

export const InfoRow = styled.div`
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 14px;
        opacity: 0.8;

        svg {
            color: yellow;
        }

        @media (max-width: 640px) {
            font-size: 13px;
            flex-wrap: wrap;
        }
`;