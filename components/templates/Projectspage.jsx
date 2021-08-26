import React from 'react';
import PageTitles from '../PageTitles/PageTitles';
import Projects from '../Projects/Projects';
import { SectionAltContainer } from './styles';

const Projectspage = () => {
  return (
    <SectionAltContainer>
      <PageTitles pageTitle1="PROJECTS" pageTitle2="My Projects" />
      <Projects />

    </SectionAltContainer>
  );
};

export default Projectspage;