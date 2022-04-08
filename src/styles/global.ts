import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  background-color: #111111
}

body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  /* color: #FFFFFF; */
}

span { color: #FFFFFF }

strong { color: #FFFFFF }

a {
  color: #FFFFFF;

  &:hover { color: #0ACEA2}
}

.select.is-success select {
  border-color: #0ACEA2;
  background: #181818;
}
`;
