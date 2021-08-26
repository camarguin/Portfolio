import React from 'react';
import Image from 'next/image';
import MyButton from '../Button/MyButton';
import PageTitles from '../PageTitles/PageTitles';
import { SectionContainer, LeftContainer, RightContainer, PageContent, ImageContainer, ButtonsContainer } from './styles';
import aboutPicture from '../../public/assets/aboutPicture.jpg';

const Aboutpage = () => {
  return (
    <SectionContainer>
      <LeftContainer>
        <PageTitles pageTitle1="ABOUT ME" pageTitle2="Lucas Gerhardt de Camargo" />
        <PageContent>
          Hi there! I am Lucas and I am a Web developer based in Vancouver, BC.
          I love bringing ideas to life in a website and I enjoy learning new things about technology.
          {/* I have been learning and working with web development since 2020. */}
          If you have interest in working with me please feel free to contact me.
        </PageContent>
        <ButtonsContainer>
          <MyButton btnLabel="Resume" />
          <MyButton btnLabel="Contact me" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image src={aboutPicture} alt="Lucas" />
          {/* <Image src={aboutPicture} alt="Lucas" width="500px" height="375px" /> */}
        </ImageContainer>
      </RightContainer>
    </SectionContainer>
  );
};

export default Aboutpage;