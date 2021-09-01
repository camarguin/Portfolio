import styled from "styled-components";

export const MyButtonContainer = styled.span`
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  perspective: 1000px;
  cursor: pointer;
  a {
    font-size: 1.1rem;
    letter-spacing: 1px;
    transform-style: preserve-3d;
    transform: translateZ(-25px);
    transition: transform .25s;
  }
  a:before, a:after {
    position: absolute;
    content: '${(props) => props.content}';
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--orange-default);
    box-sizing: border-box;
    border-radius: 5px;
  }
  a:before {
    color: var(--orange-default);
    transform: rotateY(0deg) translateZ(25px);
  }
  a:after{
    background-color: var(--orange-default);
    color: var(--white);
    transform: rotateX(90deg) translateZ(25px);
  }
  a:hover {
    transform: translateZ(-25px) rotateX(-90deg);
  }
  @media screen and (max-width: 500px) {
    width: 160px;
    a:before, a:after {
      width: 160px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 140px;
    a:before, a:after {
      width: 140px;
    }
  }
  @media screen and (max-width: 350px) {
    width: 120px;
    a:before, a:after {
      width: 120px;
      border: 5px solid var(--orange-default);
    }
  }
`;