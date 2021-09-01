import React from 'react';
import Image from 'next/image';
import { SiNextDotJs, SiFirebase, SiMaterialUi, SiStyledComponents, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import { ProjectsContainer } from './styles';

const Projects = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
            projectTechs={<><SiNextDotJs /><SiFirebase /><SiMaterialUi /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/advocaciaGerhardt.png'} projectName="Gerhardt's Lawyer"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/pizzashop.png'} projectName="Pizza Shop"
            projectTechs={<><SiReact /><SiCss3 /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/dtmoney.png'} projectName="Dtmoney"
            projectTechs={<><SiReact /><SiTypescript /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/hoys.png'} projectName="Hoys"
            projectTechs={<><SiNextDotJs /><SiStyledComponents /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/proCaliberLacrosse.png'} projectName="Pro Caliber Lacrosse"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/wvcc.png'} projectName="WVCC"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>} />
        </div>
      </Slider>
    </ProjectsContainer >
  );
};

export default Projects;