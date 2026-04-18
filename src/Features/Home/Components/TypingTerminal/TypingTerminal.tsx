'use client';

import { TerminalBox, CodeText, Cursor } from './styles';
import { useTypingEffect } from '../../Hooks/useTypingEffect';


export function TypingTerminal() {
    const text = `Sou Felipe, um desenvolvedor que adora unir frontends criativos com backends escaláveis para entregar produtos digitais significativos.`;
    
    const displayedText = useTypingEffect({
        text,
        speed: 25,
    })
    return (
        <TerminalBox>
            <CodeText>
                {displayedText}
                <Cursor>|</Cursor>
            </CodeText>
        </TerminalBox>
    )
}