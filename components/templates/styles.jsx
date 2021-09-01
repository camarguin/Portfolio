import styled from "styled-components";

export const SectionContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 20px 70px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 30px;
  }
  @media screen and (max-width: 400px) {
    padding: 10px 30px;
  }
`;

export const SectionAltContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 20px 70px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 30px;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  .floating {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    position: absolute;
    right: 30%;
  }
  @media screen and (max-width: 1100px) {
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;    
    .floating {
      width: 15vw;
      top: 20vw;
      right: 65vw;
    }
    .floating img {
      max-width: 150px;
    }
  }
  @media screen and (max-width: 600px) {
    .floating {
      top: 20vh;
    }
  }
  @media screen and (max-width: 450px) {
    .floating {
      top: 25vh
    }
  }
`;

export const IllustrationImageContainer = styled.div`
  width: 30vw;
  max-width: 600px;
  @media screen and (max-width: 800px) {
    width: 60%;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 600px) {
    width: 50%;
    padding-bottom: 30px;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 1px;
  color: var(--white);
  text-shadow: 2px 2px 2px var(--black);
  max-width: 500px;
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`
export const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: var(--orange-default);
  text-shadow: 2px 2px 2px var(--black);
  padding: 10px 0px;
`;

export const PageContent = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 157.19%;
  padding: 20px 0px;
  text-align: justify;
  color: var(--white);
  max-width: 540px;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 0px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 800px;
  width: 40vw;
  max-height: fit-content;
  display: flex;
  justify-content: right;
  @media screen and (max-width: 1120px) {
    max-width: 90%;
    height: fit-content;
    margin-right: 0px;
  }
  @media screen and (max-width: 800px) {
    width: 70%;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
  padding: 15px 0px;
  @media screen and (max-width: 1100px) {
    align-items: center;
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    align-self: center;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    justify-content: ${props => props.isDouble ? "space-between" : "center"};
  }
  @media screen and (max-width: 400px) {
    padding: 5px 0px;
  }
`;

export const IconsContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  color: var(--white);
  * {
    margin-right: 20px;
    transition: all .2s;
  }
  & *:hover {
    color: var(--orange-default);
  }
`;