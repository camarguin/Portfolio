import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: transparent;
  p {
    font-size: 1.1rem;
    font-weight: 800;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--white);
  }
  @media screen and (max-width: 320px) {
    padding: 5px 0px;
    p {
      font-size: 0.8rem;
    }
  }
`;