import { useEffect, useState } from 'react';
import { IUseTypingProps } from '../types';


export function useTypingEffect({ text, speed = 25 }: IUseTypingProps) {
  const initialText = ''
  const [displayedText, setDisplayedText] = useState(initialText);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayedText;
}