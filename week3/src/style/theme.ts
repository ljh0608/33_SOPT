import { DefaultTheme } from "styled-components";

const colors = {
  mainBlue: "#3498DB", //sky
  mainGreen: " #a8f0e5",
  mainWhite: "#ffffff",
  backgroundGrey: "#ECF0F1", //grey
  backgroundBeige: "#F1ECF0",
  subBlue: "#90bbe7",

  subGreen: "#91d8c9",
  btnGreen: "#04aa6d",
};

const fontSize = {
  head: "8rem",
  head0: "3.5rem",
  head1: "2.8rem",
  head2: "2.4rem",
  head3: "2rem",
  body1: "1.8rem",
  body2: "1.2rem",
};

export type ColorTypes = typeof colors;
export type FontsTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
