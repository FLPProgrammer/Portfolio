'use client'

import { Container, BoxProjects } from './styles';
import { CardProject } from './CardProject/CardProject';
import { dataProjects } from './Data/dataProjects';
import { containerVariants } from './Animations/cardVariants';

export function Projects() {
  return (
    <Container>
      <div className='straight-bar'></div>
      <div className='straight-bar2'></div>
      <div className='straight-bar3'></div>
      <BoxProjects
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {dataProjects.map((project) => (
          <CardProject
            key={project.id}
            img={project.img}
            name={project.name}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </BoxProjects>
      <div className='straight-bar4'></div>
      <div className='straight-bar5'></div>
      <div className='straight-bar6'></div>
    </Container>
  );
}