import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  html {
    height: 100%;
	  -webkit-box-sizing: border-box;
	        box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  body {
    padding-top: 34px;
    min-width: 320px;
    height: 100%;
    font-family: "Muller", sans-serif;
  }

  #root {
    height: 100%;
  }
`