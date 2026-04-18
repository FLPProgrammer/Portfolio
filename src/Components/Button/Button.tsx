import { Container } from './styles';
import {ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    title?: string;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, children, ...rest }: ButtonProps) {
    return (
       <Container {...rest}>
              {title || children}
       </Container> 
    )
}