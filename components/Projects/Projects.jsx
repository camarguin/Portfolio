import React from 'react';
import Image from 'next/image';
import { SiNextDotJs, SiFirebase, SiMaterialUi, SiStyledComponents, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import { ProjectsContainer } from './styles';

const Projects = () => {
  const settings = {
    slidesToShow: 3,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]
  };
  return (
    <ProjectsContainer>
      <Slider {...settings}>
        <div>
          <ProjectCard projectImg={'./assets/perfilagro.png'} projectName="Perfilagro"
            projectWebsite="https://www.perfilagro.com.br"
            projectTechs={<><SiNextDotJs /><SiFirebase /><SiMaterialUi /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/projete.png'} projectName="Projete"
            projectWebsite="https://projeteinfo.com.br"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/pizzashop.png'} projectName="Pizza Shop"
            projectWebsite="https://camarguin.github.io/pizzashop/"
            projectTechs={<><SiReact /><SiCss3 /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/advocaciaGerhardt.png'} projectName="Gerhardt's Lawyer"
            projectWebsite="https://camarguin.github.io/Tio-Project/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/dtmoney.png'} projectName="Dtmoney"
            projectWebsite="https://dtmoney-lgc.netlify.app"
            projectTechs={<><SiReact /><SiTypescript /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/hoys.png'} projectName="Hoys"
            projectWebsite="https://hoysapp.herokuapp.com/login"
            projectTechs={<><SiNextDotJs /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/proCaliberLacrosse.png'} projectName="Pro Caliber Lacrosse"
            projectWebsite="https://camarguin.github.io/lacrosseProject/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/wvcc.png'} projectName="WVCC"
            projectWebsite="https://camarguin.github.io/Mid-Term-Project/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
      </Slider>
    </ProjectsContainer >
  );
};

export default Projects;