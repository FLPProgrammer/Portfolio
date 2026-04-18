import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    font-family: 'Space Grotesk', sans-serif;

    opacity: 0;
    transform: translateY(40px);
    animation: fadeUp 0.8s ease forwards;

    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .floating-bar {
        width: 3px;
        height: 300px;
        background: linear-gradient(180deg, yellow, transparent);
        animation: growBar 1s ease forwards;
    }

    @keyframes growBar {
        from {
            height: 0;
        }
        to {
            height: 300px;
        }
    }

    @media (max-width: 1024px) {
        height: auto;
        min-height: 100vh;
        gap: 48px;
        padding: 40px 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 28px;
        padding: 28px 16px;

        .floating-bar {
            width: min(200px, 60vw);
            height: 3px;
            background: linear-gradient(90deg, yellow, transparent);
            animation: none;
        }
    }
`;

export const BoxText = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    strong {
        color: yellow;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
        gap: 22px;
    }

    @media (max-width: 640px) {
        gap: 18px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 900;

    @media (max-width: 1024px) {
        font-size: 26px;
    }

    @media (max-width: 640px) {
        font-size: 22px;
    }
`;
export const Description = styled.p`
    font-size: 24px;

    @media (max-width: 1024px) {
        font-size: 20px;
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 17px;
    }
`;



export const BoxImage = styled.div`
    max-width: 500px;
    padding: 10px;
    border-radius: 24px;

    background: linear-gradient(145deg, #000, #111);
    border: 3px solid rgba(255, 255, 0, 0.6);

    box-shadow:
        0 0 10px rgba(255, 255, 0, 0.3),
        0 0 30px rgba(255, 255, 0, 0.2),
        0 20px 40px rgba(0, 0, 0, 0.6);

    position: relative;
    overflow: hidden;

    opacity: 0;
    transform: translateX(40px) scale(0.95);
    animation: fadeRight 0.8s ease forwards;
    animation-delay: 0.5s;

    transition: all 0.4s ease;

    img {
        border-radius: 16px;
    }

    /* 🔥 brilho animado passando */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 0, 0.4),
            transparent
        );
        transform: skewX(-20deg);
    }

    &:hover::before {
        animation: shine 1s ease forwards;
    }

    &:hover {
        transform: scale(1.05);
        border: 3px solid yellow;

        box-shadow:
            0 0 20px yellow,
            0 0 60px rgba(255, 255, 0, 0.6),
            0 30px 60px rgba(0, 0, 0, 0.8);
    }

    @keyframes shine {
        to {
            left: 130%;
        }
    }

    @keyframes fadeRight {
        to {
            opacity: 1;
            transform: translateX(0) scale(1);
        }
    }

    @media (max-width: 1024px) {
        max-width: min(500px, 100%);
        width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 640px) {
        padding: 8px;
    }
`;