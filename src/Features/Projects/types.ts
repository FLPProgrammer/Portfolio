export type ICardProjectProps = {
    img: string;
    name: string;
    technologies: string[];
    link: string;
}

export interface IProject {
  id: number;
  name: string;
  img: string;
  description: string;
  technologies: string[];
  link: string;
}
