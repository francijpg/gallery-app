import { createGlobalStyle } from 'styled-components';
import './GlobalStyle.css';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Open sans', sans-serif;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

input {
  border: none;
  font-family: 'Open Sans', sans-serif;
}

button:focus,
input:focus {
  outline: none;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
`;

export default GlobalStyle;
