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
      box-shadow: 0 0 0 2px ${(props) => props.theme['adnv-green-2']};
    }

  body {
    /* background-image: url(${img});
    background-size: cover;
    background-attachment: fixed;
    background-position: center; */
    background-color:#cfd0c7;
    color: ${(props) => props.theme['adnv-green-1']};
    font-weight:bold;
    font-size: 1rem;
    line-height:1.8rem;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    max-width: 72rem
  }
`
