'use client'
import NextLink from 'next/link'
import { Container, IconBox, MenuBox, ButtonBox, MotionImage} from './styles';
import { HiArrowLeft } from 'react-icons/hi'
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';


export function Header() {
    return (
        <Container>
            <IconBox>
                <MotionImage 
                    src='/icon.png'
                    alt='Ícone'
                    width={150}
                    height={150}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 15
                    }}
                />
            </IconBox>

                <MenuBox>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                    <Link href="/stack">Stack</Link>
                </MenuBox>

            <ButtonBox>
                <NextLink href="https://wa.me/42999033921">
                    <Button>Vamos conversar!<HiArrowLeft size={24}/></Button>
                </NextLink>
            </ButtonBox>
        </Container>
    )
}