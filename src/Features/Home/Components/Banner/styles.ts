import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 70vh;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 28px;
        padding: 0 16px;
        box-sizing: border-box;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
        min-height: unset;
        padding: 0 12px;
        gap: 20px;
    }
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;

    @media (max-width: 1024px) {
        padding: 20px;
        min-width: 0;
        flex: 1 1 320px;
        max-width: 100%;
    }

    @media (max-width: 640px) {
        padding: 16px 0;
        flex: none;
    }
`

export const Description = styled.h1`
    font-size: 40px;
    color: #fff;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;

    @media (max-width: 1024px) {
        font-size: 32px;
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 26px;
    }
`

export const InfoBox = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    gap: 30px;

    .straight-bar {
        width: 2px;
        height: 40px;
        background-color: #fff;
    }

    @media (max-width: 1024px) {
        width: 100%;
        flex-wrap: wrap;
        gap: 16px 24px;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;

        .straight-bar {
            display: none;
        }
    }
`

export const ImageBox = styled.div`
    position: relative;
    width: 600px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        max-width: 100%;
        box-sizing: border-box;
        width: 100%;
        max-width: min(600px, 100%);
        height: auto;
        min-height: 380px;
        flex: 1 1 280px;
    }

    @media (max-width: 640px) {
        min-height: 280px;
        flex: none;
        order: -1;
    }
`


export const CodeImage = styled(NextImage)`
    position: absolute;
    z-index: 1;
    opacity: 0.15;

    transform: scale(1.2) rotate(-10deg);

    filter: blur(2px);

    @media (max-width: 1024px) {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 640px) {
        transform: scale(1) rotate(-8deg);
    }
`


export const ProfileImage = styled(NextImage)`
    position: relative;
    z-index: 2;

    width: 320px;
    height: 320px;

    border-radius: 50%;

    box-shadow: 
        0 20px 60px rgba(0,0,0,0.6),
        0 0 40px rgba(255, 215, 0, 0.25); 
    border: 2px solid rgba(255, 215, 0, 0.6);

    @media (max-width: 1024px) {
        max-width: 100%;
        width: min(280px, 75vw);
        height: auto;
        aspect-ratio: 1;
    }

    @media (max-width: 640px) {
        width: min(240px, 70vw);
    }
`;

export const SocialMediaBox = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        gap: 28px;
        padding: 16px 0;
    }

    @media (max-width: 640px) {
        gap: 20px;
        padding: 12px 0;
        justify-content: flex-start;
    }
`;

export const IconLink = styled.a`
    font-size: 50px;
    color: #fff;
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        font-size: 42px;
    }

    @media (max-width: 640px) {
        font-size: 36px;
    }

    &:hover {
        transform: translateY(-3px) scale(1.1);
        color: #ffd700;

        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.7));
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.6);
        border-radius: 50%;
    }
`