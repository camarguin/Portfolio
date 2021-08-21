import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: 300px;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform:
  perspective(750px)
  translate3d(0px, 0px, -250px)
  rotateX(27deg)
  scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;
  &:hover {
    transform: translate3d(0px, 0px, -250px);
  }
`;