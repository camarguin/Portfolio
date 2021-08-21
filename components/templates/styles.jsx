import styled from "styled-components";

export const HomepageContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex: row;
`;

export const AboutpageContainer = styled.div`

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
  color: var(--orange-title);
  text-shadow: 2px 2px 2px var(--black);
  padding: 10px 0px;
`;

export const H3 = styled.h3`
  font-size: 2rem;
`;