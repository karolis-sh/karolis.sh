import { injectGlobal } from 'react-emotion';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    background-color: black;
  }

  body {
    margin: 0;
    font-family: "Varela Round", sans-serif;
    font-size: 18px;
  }

  [data-reactroot] {
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;
