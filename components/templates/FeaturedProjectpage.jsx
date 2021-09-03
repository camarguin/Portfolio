import React from 'react';
import Image from 'next/image';
import { SiNextDotJs, SiMaterialUi, SiFigma } from 'react-icons/si';
import PageTitles from '../PageTitles/PageTitles';
import MyButton from '../Button/MyButton';
import { ImageContainer, LeftContainer, PageContent, RightContainer, SectionContainer, IconsContainer, ButtonsContainer } from './styles';
import dpcodeImg from '../../public/assets/dpcodeAcademy.png';

const FeaturedProjectpage = () => {
  return (
    <SectionContainer>
      <LeftContainer>
        <PageTitles pageTitle1="FEATURED PROJECT" pageTitle2="DPCODE Academy" />
        <PageContent>
          Webpage made for DPCode Academy that provides its students the best
          experience to access courses that are aimed at technologies.
          The project was developed by a team of developers, and UX/UI designers.
          I have learned how to deal with new challenges as a group,
          I was able to work with API on Nextjs and share pieces of knowledge with the team
        </PageContent>
        <IconsContainer>
          <SiNextDotJs />
          <SiMaterialUi />
          <SiFigma />
        </IconsContainer>
        <ButtonsContainer>
          <MyButton btnLabel="Check it out" btnHref="https://dpcode.academy" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image src={dpcodeImg} alt="DPCode Academy" priority={true} />
        </ImageContainer>
      </RightContainer>
    </SectionContainer>
  );
};

export default FeaturedProjectpage;