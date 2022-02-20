import React from 'react';
import Image from 'next/image';
import { SiNextDotJs, SiFirebase, SiMaterialUi, SiStyledComponents, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiMongodb } from 'react-icons/si';
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
          <ProjectCard projectImg={'./assets/reporEmbalagens.png'} projectName="ReporEmbalagens"
            projectWebsite="https://reporembalagens.com.br"
            projectTechs={<><SiNextDotJs /><SiMongodb /></>}
            projectDescription="Website built for Reporembalagens to help reach customer online. 
            The company has a on-site business where they sell packaging items. The website was made for 
            customers to see and order items online through their accounts. The website has also an admin 
            page where they can add more products, see the users and orders. With constant improvements in the website
            they noticed the increase of their customers, especially because of easy access to it during the covid-19 pandemic.
            I designed and developed the website using Figma for design and nextjs with mongodb and Chakra-ui where I could
            learn how to handle complex coding while using a database and authentication with next-auth. I am proud of my work
            and I hope I can improve this website more and more while learning.
            "
            projectDescriptionTechs="Nextjs, MongoDB, Chakra-ui, Next-auth"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/perfilagro.png'} projectName="Perfilagro"
            projectWebsite="https://www.perfilagro.com.br"
            projectTechs={<><SiNextDotJs /><SiFirebase /><SiMaterialUi /><SiStyledComponents /></>}
            projectDescription="Webpage developed for Perfilagro, a Brazilian company that manages job offers aimed at agriculture. 
            On the website you are able to see many job offers and apply for any of them, any company can also send their own job offers. 
            The webpage has also the admin part where the owner and his secretaries can manage all the job offers and candidates. 
            What I could learn through this project was how to work with firebase. 
            At the beginning, I was a little bit confused and how to save documents such as png, pdf, docx files into a database. 
            After few hours looking for a NoSQL database that could do such work, 
            I found out that firebase was a good match for this kind of project and then 
            I learned it and developed this great platform with a basic and useful admin system. 
            First, I built the layout of the pages on Figma and waited to get approval from the owner, and then started to develop the webpage.
            This project was made by myself and I am still working on some improvements but it was a such great experience for me.
            "
            projectDescriptionTechs="Nextjs, Firebase, Styled-components, Swr, Material-ui, Sendgrid"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/projete.png'} projectName="Projete"
            projectWebsite="https://projeteinfo.com.br"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>}
            projectDescription="A Website developed for Projete, 
            a Brazilian school that offers some courses about technologies and others. 
            On the website, you are able to see the details about the offered courses, your certification, 
            information about the school, and also download some important documents. 
            After a long time not working with simple HTML and CSS it was good to develop this website because I could see that 
            I am ready for any challenges involving HTML and CSS. 
            The most difficult part was to use the Instagram API to automatically shows new posts from their Instagram account. 
            I took few hours to learn how to deal with that and how to structure the posts. The project was developed with a friend that is also 
            a co-owner of the school and together we built the layout on Figma before starting the development process.
            "
            projectDescriptionTechs="Html, CSS, Javascript, Instafeed"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/pizzashop.png'} projectName="Pizza Shop"
            projectWebsite="https://camarguin.github.io/pizzashop/"
            projectTechs={<><SiReact /><SiCss3 /></>}
            projectDescription="A website developed as part of my studies, 
            where I created a fictional pizza shop website where you can order pizza and drinks. 
            On the website, you are able to see some of the popular pizzas and the pizza of the day where also there is a button 
            'order now' that takes you to the full menu and then add, remove, change toppings and see the total price of your order. 
            It was a great project for me because I was starting to learn how to use Figma and build my layouts and also 
            I could practice some react development such as hooks, states, mappings, objects, events that I learned from my co-op program. 
            First I built the layout on Figma and then I started to code it using react.
            "
            projectDescriptionTechs="React, CSS"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/advocaciaGerhardt.png'} projectName="Gerhardt's Lawyer"
            projectWebsite="https://camarguin.github.io/Tio-Project/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>}
            projectDescription="A website made for a Brazilian Lawyer Office that needed a renewed website for your customers. 
            The website shows information about the lawyer office, why they should choose them, who works there and a bit about their history. 
            I worked on this website as part of my co-op college program project, and the most difficult part was develop the contact 
            form part with the google maps api. It was a great opportunity at that time because I wanted to do the whole website alone by 
            taking ideas from the older website and totally rebuilding it. For this website I worked on the frontend part with HTML, 
            CSS and javascript only and then giving it to the backend developer to use it on the real website which is live today on
            https://advocaciagerhardt.com.br
            "
            projectDescriptionTechs="Html, CSS, Javascript, Materialize-CSS"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/dtmoney.png'} projectName="Dtmoney"
            projectWebsite="https://dtmoney-lgc.netlify.app"
            projectTechs={<><SiReact /><SiTypescript /><SiStyledComponents /></>}
            projectDescription="Coming soon"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/hoys.png'} projectName="Hoys"
            projectWebsite="https://hoysapp.herokuapp.com/login"
            projectTechs={<><SiNextDotJs /><SiStyledComponents /></>}
            projectDescription="Coming soon"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/proCaliberLacrosse.png'} projectName="Pro Caliber Lacrosse"
            projectWebsite="https://camarguin.github.io/lacrosseProject/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>}
            projectDescription="Coming soon"
          />
        </div>
        <div>
          <ProjectCard projectImg={'./assets/wvcc.png'} projectName="WVCC"
            projectWebsite="https://camarguin.github.io/Mid-Term-Project/"
            projectTechs={<><SiHtml5 /><SiCss3 /><SiJavascript /></>}
            projectDescription="Coming soon"
          />
        </div>
      </Slider>
    </ProjectsContainer >
  );
};

export default Projects;