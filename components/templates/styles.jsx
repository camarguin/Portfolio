import styled from "styled-components";

export const SectionContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  display: flex;
  flex: row;
`;

export const SectionAltContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 1px;
  color: var(--white);
  text-shadow: 2px 2px 2px var(--black);
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
`;

export const ImageContainer = styled.div`
  max-width: 800px;
  width: 40vw;
  display: flex;
  justify-content: right;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
  padding: 15px 0px;
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