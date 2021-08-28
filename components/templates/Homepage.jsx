import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai'
import FloatingComponent from 'react-floating-component';
import { SectionContainer, LeftContainer, RightContainer, H1, H2, IllustrationImageContainer } from './styles';
import homeIllustrationImg from '../../public/assets/homeIllustration.png';
import htmlIcon from '../../public/assets/htmlIcon.png';
import cssIcon from '../../public/assets/cssIcon.png';
import jsIcon from '../../public/assets/jsIcon.png';
import codeIcon from '../../public/assets/codeIcon.png';

const Homepage = () => {
  return (
    <SectionContainer >
      <LeftContainer>
        <H1>Feel the power of a well crafted website</H1>
        <H2><AiOutlineArrowDown />&nbsp;Meet Lucas</H2>
      </LeftContainer>
      <RightContainer>
        <IllustrationImageContainer>
          <div className="floating">
            <FloatingComponent>
              <Image src={htmlIcon} alt="illustration" width="70.83" height="82.1" />
            </FloatingComponent>
            <FloatingComponent>
              <Image className="js" src={jsIcon} alt="illustration" width="39.308" height="63.7" />
            </FloatingComponent>
            <FloatingComponent>
              <Image className="css" src={cssIcon} alt="illustration" width="55.562" height="73.2" />
            </FloatingComponent>
            <FloatingComponent>
              <Image className="code" src={codeIcon} alt="illustration" width="48.434" height="69.2" />
            </FloatingComponent>
          </div>
          <Image src={homeIllustrationImg} alt="illustration" />
        </IllustrationImageContainer>
      </RightContainer>
    </SectionContainer>
  );
};

export default Homepage;