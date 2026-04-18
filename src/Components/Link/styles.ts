import styled from 'styled-components';

export const StyledLink = styled.a`
    position: relative;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all, 0.3s ease;

    &:hover {
        color: #ffd700;
        text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #ffd700, #a67c2d);
        transition: all 0.3s;
    }

    &:hover::after {
        width: 100%;
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.6);
        border-radius: 4px;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 640px) {
        font-size: 15px;
    }
`;
