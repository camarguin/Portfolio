import styled from "styled-components";

export const HomepageContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  display: flex;
  flex: row;
`;

export const AboutpageContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  display: flex;
  flex: row;
`;

export const SkillspageContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px 100px;
  display: flex;
  flex: row;
`

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
  color: var(--orange-title);
  text-shadow: 2px 2px 2px var(--black);
  padding: 10px 0px;
`;

export const H3 = styled.h3`
  font-size: 2rem;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
  h2 {
    color: var(--orange-title);
    text-shadow: 2px 2px 2px var(--black);
  }
`;

export const HrTitleLine = styled.hr`
  width: 75px;
  border: 1px solid var(--orange-title);
`;

export const PageSubtitle = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 1px;
  color: var(--white);
  font-weight: bold;
  text-shadow: 2px 2px 2px var(--black);
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
  max-width: 500px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
`;