import { createGlobalStyle } from "styled-components";
import "modern-normalize";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol,
dl {
  margin: 0;
  padding: 0;
}

li, 
dd, 
dt {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  padding: 0;
  border: none;
}
`;

export default GlobalStyles;
