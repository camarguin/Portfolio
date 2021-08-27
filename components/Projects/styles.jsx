import styled from "styled-components";

export const CardContainer = styled.figure`
  color: var(--white);
  position: relative;
  overflow: hidden;
  margin: 10px auto;
  min-width: 220px;
  max-width: 350px; //change on responsive
  max-height: 197px; //change on responsive
  width: 100%;
  background: var(--orange-dark);
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  & * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  img {
    opacity: 1;
    width: 100%;
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    margin: 0 auto;
  }
  a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    color: var(--white);
  }
  &:hover img,
  &:hover img {
    opacity: 0.35;
    -webkit-filter: blur(5px);
    filter: blur(5px);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  &:hover figcaption span,
  &.hover figcaption span {
    -webkit-transform: translate3d(0%, 0%, 0);
    transform: translate3d(0%, 0%, 0);
  }
  &:hover figcaption h3,
  &.hover figcaption h3 {
    -webkit-transform: translate3d(0%, -100%, 0);
    transform: translate3d(0%, -100%, 0);
  }
`;

export const CardTextContainer = styled.figcaption`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0%;
  /* left: 18%; */
  right: 18%;
  height: 100%;
  & > div {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 78%;
  }
`;

export const CardTextH3 = styled.h3`
  margin: 0;
  padding: 10px 15px;
  display: inline-block;
  width: 100%;
  font-weight: 400;
  text-transform: uppercase;
  background: var(--orange-default);
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
`;

export const CardTextSpan = styled.span`
  margin: 0;
  padding: 10px 15px;
  display: block;
  /* display: inline-block; */
  width: 70%;
  /* width: 100%; */
  font-weight: 400;
  text-transform: uppercase;
  background: var(--white);
  color: var(--orange-default);
  position: relative;
  bottom: 0;
  left: 50px;
  position: absolute;
  -webkit-transform: translate3d(0%, 100%, 0);
  transform: translate3d(0%, 100%, 0);
`;

export const ProjectsContainer = styled.div`
  padding: 10px 0px;
  .carousel {
    padding: 0px 0px;
    margin: 0 auto;
    align-self: center;
  }
  .carousel:nth-child(1) {
    margin: 0 auto;
  }
`;