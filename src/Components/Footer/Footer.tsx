import Image from 'next/image'
import { Container, BoxIcon, Title, BoxInformation, Navbar, Email, BoxEmail, BoxCopyright } from './styles';
import { MdEmail } from 'react-icons/md'
import { Link } from '../Link/Link';

export function Footer() {
    return (
        <Container>
            <BoxIcon>
                <Image 
                  src="/icon.png"
                  alt="Ícone da página"
                  width={100}
                  height={100}
                />

                <Title>Você tem algum projeto fascinante em mente?</Title>
            </BoxIcon>
            <BoxInformation>
                <Navbar>
                    <Link href='/projects'>Projects</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </Navbar>
                <BoxEmail>
                    <MdEmail />
                    <Email>lplpfwr@gmail.com</Email>
                </BoxEmail>
            </BoxInformation>
            <div className='straight-line'></div>
            <BoxCopyright><p>© Criado por <strong>Felipe José de Lima</strong></p></BoxCopyright>
        </Container>
    )
}