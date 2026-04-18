'use client'

import Image from 'next/image'
import { Container, BoxImage, BoxInformation, BoxLink, Name, TechIcons, TechIcon } from './styles';
import { Link } from '../../../Components/Link/Link';
import { ICardProjectProps } from '../types';
import { containerVariants } from '../Animations/cardVariants';
import  { techIcons } from '../Data/techIcons'
import { FaProjectDiagram } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

export function CardProject({ img, name, technologies, link }: ICardProjectProps) {
  return (
    <Container variants={containerVariants} whileHover={{ y: -6 }}>
      <div className='ball'></div>
      <BoxImage>
          <Image
            src={img}
            alt={name}
            width={800}
            height={500}
          />
      </BoxImage>
      <BoxInformation>
          <Name><FaProjectDiagram /> {name}</Name>

        <TechIcons>
          {technologies.map((tech) => (
            <TechIcon
              key={tech}
              src={techIcons[tech]}
              alt={tech}
              title={tech}
            />
          ))}
        </TechIcons>
      </BoxInformation>
      <BoxLink>
          <FaFireFlameCurved  color='yellow'/>
         <Link href={link}>
            Vá para o projeto
          </Link>
      </BoxLink>
    </Container>
  );
}