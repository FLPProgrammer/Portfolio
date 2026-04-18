import styled from 'styled-components';


export const TerminalBox = styled.div`
    width: 100%;
    max-width: 600px;

    background: linear-gradient(
        135deg,
         #0a0a0a,
        #111,
        #1a1a1a
    );

    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 12px;

    padding: 20px;

     box-shadow: 
    0 10px 40px rgba(0,0,0,0.6),
    0 0 30px rgba(255, 215, 0, 0.08);

  font-family: 'Space Grotesk', monospace;

    @media (max-width: 1024px) {
        max-width: 100%;
        padding: 16px;
    }

    @media (max-width: 640px) {
        padding: 14px;
    }
`;

export const CodeText = styled.p`
    color: #f5d67a;
    font-size: 16px;
    line-height: 1.6;
    white-space: pre-wrap;

    @media (max-width: 1024px) {
        font-size: 15px;
        word-wrap: break-word;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        font-size: 13px;
    }
`;

export const Cursor = styled.span`
    display: inline-block;
    margin-left: 4px;

    animation: blink 1s infinite;
    
    @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
    }
`;