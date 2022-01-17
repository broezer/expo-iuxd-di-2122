import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

// import Footer from '@/components/Footer';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background:white;
  }

  body {
    background: black;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  iframe {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#FF00FF'
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
