import { createGlobalStyle } from "styled-components/macro";
import { colorBackground, ffRoboto } from "./globalVariables";

export const GlobalStyle = createGlobalStyle`
  /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
*:where(:not(iframe, canvas, img, svg, video):not(svg *, input)) {
  all: unset;
  display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
*/
ol, ul {
  list-style: none;
}

/* For images to not be able to exceed their container */
img {
  max-width: 100%;
}

/* Removes spacing between cells in tables */
table {
  border-collapse: collapse;
}

/* Revert the 'white-space' property for textarea elements on Safari */
textarea {
  white-space: revert;
}
/* Reset buttons */
button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.6rem;
    font-family: ${ffRoboto};
    background-color: ${colorBackground};  
  }
`;
