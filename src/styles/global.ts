import img from '../assets/cross-background.jpg'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
    }

  body {
    background-image: url(${img});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: ${(props) => props.theme['adnv-green-1']};
    font-size: 0.875rem;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    max-width: 38rem;

    label {
    font-weight: bold;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    }
  }

  body, input, textarea, button, select {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
