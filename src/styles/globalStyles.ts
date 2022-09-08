import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    --black: #000;
    --grey: #ddd;
    --radius: 4px;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--grey);
    font-family: Inter, Sans-Serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button {
    transition: all 0.1s linear;
  }
 
  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
