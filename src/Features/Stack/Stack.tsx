import { Container, BoxCards, Title } from './styles';
import { stackData } from './Data/stackData'
import { StackCard } from './Components/StackCard/StackCard';
import { motion } from 'framer-motion';
import { containerVariants } from './Animations/stackAnimations';


export function Stack() {
  return (
    <Container>
      <Title>Main Stack</Title>
      <BoxCards
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
      >
          {stackData.map((tech) => (
          <StackCard
            key={tech.name}
            img={tech.img}
            name={tech.name} 
            level={tech.level}
            status={tech.status}
          />
        ))}  
      </BoxCards>
    </Container>
  );
}