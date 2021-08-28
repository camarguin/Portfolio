import styled from "styled-components";

export const CardOverlayBackground = styled.div`
  position: absolute;
  transition: 0.5s;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: linear-gradient(315deg, #000000 0%, #000000 100%);
  opacity: 0;
`;

export const CardTechIcons = styled.h1`
  transform: translateY(0px);
  margin: 0 auto;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 160px;
  font-size: 2rem;
  opacity: 0;
  * {
    margin-right: 5px;
    transition: ease-in-out 0.1s;
  }
  *:hover {
    color: var(--orange-default);
  }
`;

export const CardTextContainer = styled.div`
`;

export const CardTextH3 = styled.h3`
  transform: translateY(0px);
  transition: 0.5s;
  text-align: center;
  opacity: 0;
  font-weight: 900;
  font-size: 1.4rem;
`;

export const CardTextA = styled.button`
  display: inline-block;
	padding: 10px 20px;
  width: 140px;
	color: var(--white);
	border: 1px solid var(--orange-default);
	font-size: 12px;
	text-transform: uppercase;
	text-decoration: none;
	transition: .5s;
  opacity: 0;
  &:hover {
    background-color: var(--orange-default);
  }
`;

export const CardContainer = styled.div`
  background: ${props => `url(${props.backgroundImg}) no-repeat top center`};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  height: 200px;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: 0.4s ease-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #fff;
  &:hover ${CardOverlayBackground} {
    opacity: 0.8;
  }
  &:hover ${CardTechIcons} {
    opacity: 1;
    transform: translateY(-55px);
  }
  &:hover ${CardTextH3} {
    opacity: 1;
    transform: translateY(5px);
  }
  &:hover ${CardTextA} {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

export const ProjectsContainer = styled.div`
  padding: 10px 0px;
  .carousel {
    padding: 0px 0px;
    margin: 0 auto;
  }
  .carousel:nth-child(1) {
    margin: 0 auto;
  }
`;