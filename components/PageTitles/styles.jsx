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
  color: var(--orange-title);
  text-shadow: 2px 2px 5px var(--black);
`;

export const PageTitleH1 = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 1px;
  color: var(--white);
  font-weight: bold;
  text-shadow: 2px 2px 2px var(--black);
`;

export const HrTitleLine = styled.hr`
	margin-right: 15px;
  width: 75px;
  border: 1px solid var(--orange-title);
	box-shadow: 2px 2px 10px var(--black);
`;