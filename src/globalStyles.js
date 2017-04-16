import { injectGlobal } from 'styled-components';

export const colors = {
  RED:       "#E53A40",
  PURPLE:    "#A593E0",
  ORANGE:    "#F6B352",
  BLUE:      "#30A9DE",
  GREEN:     "#88DBA3",
  YELLOW:    "#EFDC05",
  PRIMARY:   "#6D819C",
  SECONDARY: "#55967E",
  LIGHT:     "#E4E7EC",
  DARK:      "#263959",
}

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${colors.LIGHT};
    color: ${colors.DARK};
  }
`;
