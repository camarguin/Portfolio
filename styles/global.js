import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange-title: #E27D60;
    --white: #ffffff;
    --black: #000000;
    /*
    --green-dark: #164A41;
    --green-medium: #4D774E;
    --green-light: #9DC88D;
    --gray-label: #8E9AAF;
    --gray-input: #EFEBEB;
    --white: #fff;
    --dark-text: #252422; */
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