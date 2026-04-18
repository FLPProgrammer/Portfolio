import styled  from 'styled-components';

export const Container = styled.div`
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    flex-wrap: nowrap;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 100vh;
        gap: 36px;
        padding: 48px 20px 80px;
        box-sizing: border-box;
    }

    @media (max-width: 640px) {
        gap: 28px;
        padding: 36px 16px 64px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 26px;
        text-align: center;
        padding: 0 12px;
    }

    @media (max-width: 640px) {
        font-size: 22px;
    }
`;


export const BoxCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 1024px) {
        gap: 22px;
        box-sizing: border-box;
        padding: 0 16px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    @media (max-width: 640px) {
        gap: 18px;
        padding: 0 12px;
        grid-template-columns: 1fr;
    }
  `