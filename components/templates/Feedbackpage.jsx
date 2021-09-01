import React from 'react';
import Image from 'next/image';
import PageTitles from '../PageTitles/PageTitles';
import { IllustrationImageContainer, LeftContainer, RightContainer, SectionContainer } from './styles';
import feedbackIllustrationImg from '../../public/assets/feedbackIllustration.png';
import Feedbacks from '../Feedbacks/Feedbacks';

const Feedbackpage = () => {
  return (
    <SectionContainer>
      <LeftContainer>
        <PageTitles pageTitle1="PEOPLE FEEDBACK" pageTitle2="What People Say..." />
        <Feedbacks />
      </LeftContainer>
      <RightContainer>
        <IllustrationImageContainer>
          <Image src={feedbackIllustrationImg} alt="Feedback Illustration" priority={true} />
        </IllustrationImageContainer>
      </RightContainer>
    </SectionContainer>
  );
};

export default Feedbackpage;