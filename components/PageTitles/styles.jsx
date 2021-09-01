import styled from 'styled-components'

export const PageTitlesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const PageTitle2Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageTitleH2 = styled.h2`
  font-size: 1rem;
	font-weight: 900;
  color: var(--orange-default);
  text-shadow: 2px 2px 5px var(--black);
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const PageTitleH1 = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 1px;
  color: var(--white);
  font-weight: bold;
  text-shadow: 2px 2px 2px var(--black);
  @media screen and (max-width: 1100px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const HrTitleLine = styled.hr`
	margin-right: 15px;
  width: 75px;
  border: 1px solid var(--orange-default);
	box-shadow: 2px 2px 10px var(--black);
  @media screen and (max-width: 400px) {
    width: 40px;
  }
`;