'use client'

import {
  Container,
  TextBox,
  InfoBox,
  ImageBox,
  Description,
  ProfileImage,
  CodeImage,
  SocialMediaBox,
  IconLink,
} from './styles';

import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import { TypingTerminal } from '../TypingTerminal/TypingTerminal';

export function Banner() {
  return (
    <Container>
      <TextBox>
        <Description>
          Do conceito à escala — eu transformo sua visão em web.
        </Description>

        <InfoBox>
          <div><strong>Vários Projetos Concluídos</strong></div>
          <div className='straight-bar'></div>
          <div><strong>3 anos de experiência</strong></div>
        </InfoBox>

        <SocialMediaBox>
            <IconLink href="https://wa.me/42999033921" target="_blank">
                <FaWhatsapp />
            </IconLink>

            <IconLink href="https://www.linkedin.com/in/felipe-jos%C3%A9-de-lima-6338b233b/" target="_blank">
                <FaLinkedin />
            </IconLink>

            <IconLink href="https://github.com/FLPProgrammer" target="_blank">
                <FaGithub />
            </IconLink>
      </SocialMediaBox>

     <TypingTerminal />
     
      </TextBox>

      <ImageBox>
        <CodeImage
          src="/code.png"
          alt="icone code"
          width={1200}
          height={300}
        />

        <ProfileImage
          src="/profile.png"
          alt="Imagem de perfil"
          width={400}
          height={300}
        />
      </ImageBox>
    </Container>
  )
}