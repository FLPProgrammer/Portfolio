import Image from 'next/image';
import { Container, BoxText, Title, Description, BoxImage } from './styles'
import { Button } from '../../Components/Button/Button'
export function About() {
    return (
      <Container>
         <div className='floating-bar'></div>
         <BoxText>
            <Title>TUDO SOBRE FELIPE</Title>
            <Description>Olá, Felipe José de Lima, um dedicado <strong>Desenvolvedor Full Stack</strong> apaixonado por criar aplicações web modernas, que unem beleza na interface e robustez na estrutura.

Tenho experiência com <strong>React, Next.js, Node.js, Express e PostgreSQL,</strong> integrando design intuitivo e funcionalidades eficientes. Também possuo vivência em sistemas de autenticação e gateways de pagamento, sempre com foco em soluções seguras e escaláveis.

Seja no desenvolvimento de um MVP para startups ou em aplicações empresariais de maior porte, meu objetivo é escrever código limpo, sustentável e entregar experiências que encantem os usuários.</Description>
            <Button>Mais sobre mim</Button>
         </BoxText>
         <BoxImage>
            <Image 
                src="/bannerAbout.png"
                alt="Banner do sobre"
                width={500}
                height={500}
            />
         </BoxImage>
      </Container>
    )
}