import { StyledLink } from './styles';

type ILinkProps = {
    children: React.ReactNode;
    href: string;
}


export function Link({children, href}: ILinkProps) {
    return (
        <StyledLink href={href}>
            {children}
        </StyledLink>
    )
}