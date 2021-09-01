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
        <PageTitles pageTitle1="FEATURED PROJECT" pageTitle2="DPCode Academy" />
        <PageContent>
          This is my featured project I worked on recently. The project was made by a team of backend, frontend and UX/UI designer
          A web app created for DPCode Academy to provide the best experience for its students.
        </PageContent>
        <IconsContainer>
          <SiNextDotJs />
          <SiMaterialUi />
          <SiFigma />
        </IconsContainer>
        <ButtonsContainer>
          <MyButton btnLabel="Check it out" />
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