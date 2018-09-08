import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

const Theme = {
  colors: {
    red: "#f00",
    black: "#222",
    white: "#fff",
  },
  sizes: {
    header: 50,
    social: 50,
  },
  spacing: {
    base: 30,
  },
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1025
  }
};

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding-bottom: ${Theme.sizes.social}px;
    min-height: calc(100% - ${Theme.sizes.social}px);
    margin: 0;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
  }
  body, p, ol, ul {
    font-family: Source Serif Pro;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Open Sans;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  iframe {
    max-width: 100%;
  }

  @media screen and (min-width: 737px) {
    body {
      padding-left: ${Theme.spacing.base * 2.5}px;
      padding-bottom: 0;
      min-height: 100vh;
    }
  }
`

const DefaultTheme = (props) => (
  <ThemeProvider theme={Theme}>
    {props.children}
  </ThemeProvider>
)

export default DefaultTheme