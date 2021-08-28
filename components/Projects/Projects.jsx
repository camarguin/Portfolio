import React from 'react';
import Carousel from 'react-grid-carousel'
import { SiNextDotJs, SiFirebase, SiMaterialUi, SiStyledComponents, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import { ProjectsContainer } from './styles';
// import advocaciaGerhardtImg from '../../public/assets/advocaciaGerhardt.png';
// import dtmoneyImg from '../../public/assets/dtmoney.png';
// import perfilagroImg from '../../public/assets/perfilagro.png';
// import pizzaShopImg from '../../public/assets/pizzashop.png';
// import hoysImg from '../../public/assets/hoys.png';
// import proCaliberImg from '../../public/assets/proCaliberLacrosse.png';
// import wvccImg from '../../public/assets/wvcc.png';

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
          <ProjectCard projectImg={'./assets/perfilagro.png'} projectName="Perfilagro"
            projectTechs={<><SiNextDotJs /><SiFirebase /><SiMaterialUi /><SiStyledComponents /></>} />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/advocaciaGerhardt.png'} projectName="Gerhardt's Lawyer"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/pizzashop.png'} projectName="Pizza Shop"
            projectTechs={<><SiReact /><SiCss3 /></>} />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/dtmoney.png'} projectName="Dtmoney"
            projectTechs={<><SiReact /><SiTypescript /><SiStyledComponents /></>}
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/hoys.png'} projectName="Hoys"
            projectTechs={<><SiNextDotJs /><SiStyledComponents /></>} />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/proCaliberLacrosse.png'} projectName="Pro Caliber Lacrosse"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectCard projectImg={'./assets/wvcc.png'} projectName="WVCC"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </Carousel.Item>
      </Carousel>
    </ProjectsContainer>
  );
};

export default Projects;