import styled from "styled-components";

export const SkillsGridContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  padding: 10px 0px;
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
    color: var(--orange-title);
    path {
      fill: var(--orange-title);
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
`;