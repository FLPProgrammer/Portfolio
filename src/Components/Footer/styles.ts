import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px; 
    border-radius: 20px;
    box-shadow: 0 0 80px rgba(255, 215, 0, 0.15);
    background: linear-gradient(
    160deg,
    #0a0a0a 0%,
    #1c1c1c 40%,
    #a67c2d 60%,
    #ffd700 72%,
    #a67c2d 82%,
    #0a0a0a 100%
    );

    .straight-line {
        width: 500px;
        max-width: 100%;
        height: 2px;
        background-color: yellow;

    }

    @media (max-width: 1024px) {
        min-height: auto;
        gap: 32px;
        padding: 24px 16px;
        box-sizing: border-box;

        .straight-line {
            width: min(500px, 92vw);
        }
    }

    @media (max-width: 640px) {
        gap: 24px;
        padding: 20px 12px;

        .straight-line {
            width: min(500px, 100%);
        }
    }
`;

export const BoxIcon = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        padding: 0 8px;
        gap: 16px;
        flex-wrap: wrap;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 20px;
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 18px;
    }
`;

export const BoxInformation = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        padding: 0 12px;
        gap: 28px;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 0 8px;
    }
`;

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }

    @media (max-width: 640px) {
        gap: 12px 16px;
    }
`;


export const Email = styled.h4`
    font-size: 24px;
    color: #fff;

    @media (max-width: 1024px) {
        font-size: 20px;
        word-wrap: break-word;
        overflow-wrap: anywhere;
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
    }
`;

export const BoxEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const BoxCopyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    strong {
        color: yellow;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
        text-align: center;
        padding: 0 12px;
        box-sizing: border-box;

        p {
            word-wrap: break-word;
            overflow-wrap: anywhere;
        }
    }

    @media (max-width: 640px) {
        font-size: 14px;
    }
`;




