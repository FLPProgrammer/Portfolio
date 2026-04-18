import Image from 'next/image'
import { Container, BoxInformation, InfoRow, Name } from './styles';
import { IStackCardProps } from '../../types';
import { FaTrophy } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { cardVariants } from '../../Animations/stackAnimations';

export function StackCard({img, name, level, status}: IStackCardProps) {
  return (
  <Container
    variants={cardVariants}
  >
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
          />
        <BoxInformation>
            <Name>{name}</Name>
            
            <InfoRow>
                <FaTrophy />
                <span>{level}</span>
            </InfoRow>

            <InfoRow>
                <FaFireFlameCurved/>
                <span>{status}</span>
            </InfoRow>
        </BoxInformation>
    </Container>
  );
}