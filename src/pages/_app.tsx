import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

import Video from '@/components/Video';
// import Footer from '@/components/Footer';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
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
        <Video src="https://player.vimeo.com/external/667485149.hd.mp4?s=c9ac2a34e5506f80f2b63c55fc5f558d9ffb58b7&profile_id=175" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
