import styled from 'styled-components'

export const HomepageContainer = styled.div`
  background-image: url('./assets/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 850px ) {
    background-image: url('./assets/mobileBackground.png');
    background-position-x: center;
    background-size: 100vh;
  }
  @media screen and (min-height: 1000px) {
    background-size: 150vh;
  }
  @media screen and (min-width: 1920px) {
    background-size: 230vh;
  }
`;