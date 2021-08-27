import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange-default: #E27D60;
    --orange-dark: #44251d;
    --white: #ffffff;
    --black: #000000;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Nunito' sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  #fp-nav ul li a span, .fp-slidesNav ul li a span {
  background: #fff !important;
}
`;