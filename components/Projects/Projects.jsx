import React from 'react';
import Carousel from 'react-grid-carousel'
import ProjectCard from './ProjectCard';
import { ProjectsContainer } from './styles';
import advocaciaGerhardtImg from '../../public/assets/advocaciaGerhardt.png';
import dtmoneyImg from '../../public/assets/dtmoney.png';
import perfilagroImg from '../../public/assets/perfilagro.png';
import pizzaShopImg from '../../public/assets/pizzashop.png';
import hoysImg from '../../public/assets/hoys.png';
import proCaliberImg from '../../public/assets/proCaliberLacrosse.png';
import wvccImg from '../../public/assets/wvcc.png';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Carousel
        cols={3}
        rows={2}
        gap={40}
        containerClassName="carousel"
        responsiveLayout={[{ breakpoint: 800, cols: 2, gap: 10 }]}
        showDots
        loop
        scrollSnap
      >
        <Carousel.Item>
          <ProjectCard projectImg={perfilagroImg} projectName="Perfilagro" projectAlt="Perfilagro" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={advocaciaGerhardtImg} projectName="Gerhardt's Lawyer" projectAlt="Advocacia Gerhardt" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={pizzaShopImg} projectName="Pizza Shop" projectAlt="Pizzashop" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={dtmoneyImg} projectName="Dtmoney" projectAlt="Dtmoney" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={hoysImg} projectName="Hoys" projectAlt="Hoys" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={proCaliberImg} projectName="Pro Caliber Lacrosse" projectAlt="Pro Caliber Lacrosse" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={wvccImg} projectName="West Vancouver Cricket Club" projectAlt="West Vancouver Cricket Club" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={pizzaShopImg} projectName="Pizza Shop" projectAlt="Pizzashop" />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={pizzaShopImg} projectName="Pizza Shop" projectAlt="Pizzashop" />
        </Carousel.Item>
      </Carousel>
    </ProjectsContainer>
  );
};

export default Projects;