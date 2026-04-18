import styled from 'styled-components';

export const Container = styled.button`
    background: linear-gradient(135deg, #a67c2d, #ffd700);
    color: #000;
    font-weight: 600;
    padding: 12px 22px;
    border-radius: 30px;
    border: none;
    cursor: pointer;

    transition: all 0.3s ease;

    box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);

    &:hover {
        transform: translateY(-2px) scale(1.03);

        box-shadow: 
            0 10px 30px rgba(0,0,0,0.4),
            0 0 25px rgba(255, 215, 0, 0.7);

        background: linear-gradient(135deg, #ffd700, #ffea00);
    }

    &:active {
        transform: scale(0.97);
    }

    &:focus-visible {
        outline: none;
        box-shadow: 
            0 0 0 3px rgba(255, 215, 0, 0.6),
            0 0 25px rgba(255, 215, 0, 0.8);
    }

    @media (max-width: 1024px) {
        padding: 10px 18px;
        font-size: 0.95rem;
    }

    @media (max-width: 640px) {
        padding: 10px 16px;
        font-size: 0.9rem;
    }
`
