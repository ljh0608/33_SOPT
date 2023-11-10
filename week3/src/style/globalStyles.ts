import { createGlobalStyle } from "styled-components";

import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
  box-sizing: border-box;
    }
    html, body {

margin: 0 auto;
font-size: 62.5%;
}

button {
border: none;
background: none;
  cursor: pointer;
font: inherit;
}
`;

export default GlobalStyle;
