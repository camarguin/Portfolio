import styled from "styled-components";

export const SkillsGridContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  padding: 10px 0px;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 50px 0px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 325px) {
    padding: 10px 0px;
    grid-template-columns: repeat(3,1fr);
    /* background-color: red; */
  }

`;

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  width: 160px;
  height: 140px;
  padding: 10px;
  transition: all .5s;
  path {
    transition: ease-in-out .5s;
  }
  &:hover {
    transform: scale(1.2);
    color: var(--orange-default);
    path {
      fill: var(--orange-default);
    }
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 100px;
    height: auto;
    padding: 10px 0px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
  @media screen and (max-width: 325px) {
    width: 85px;
    height: fit-content;
    &:hover {
      transform: none;
    }
  }
`;

export const SkillCardIcon = styled.h1`
  font-size: 3rem;
  padding: 10px 0px;
`;

export const SkillCardText = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 325px) {
    letter-spacing: 1px;
    font-size: 1rem;
  }
`;