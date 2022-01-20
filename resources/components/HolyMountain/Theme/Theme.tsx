import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#070504",
    white: "#fafafa",
    grey1: "#ececec",
    grey2: "#3e3e3e",
  },
  hmColors: {
    red: "#e30022",
    orange: "#ff8b00",
    yellow: "#fee72f",
    green: "#03c03c;",
    blue: "#1f75fe",
    purple: "#662b7e",
  },
  vpColors: {
    lightBlue: "#3a819f",
    blue: "#3c69ad",
    purple: "#493687",
    plum: "#732e81;",
    pink: "#9e0063",
    pinkRed: "#a8004b",
    red: "#bf0038",
    orange: "#d48624",
  },
  fonts: {
    fontBody: "IBM Plex Mono",
    fontDisplay: "Computerfont",
    fontAlt: "Windows Command Prompt",
  },
  fontSizes: {
    fontSizeXl: "65px",
    fontSizeHeading: "45px",
    fontSizeSubhead: "36px",
    fontSizeBody: "18px",
    fontSizeDetail: "14px",
  },
  breakpoints: {
    desktop4k: "2560px",
    desktop: "1880px",
    laptopL: "1440px",
    laptop: "1024px",
    tablet: "768px",
    mobileL: "425px",
    mobileM: "375px",
    mobileS: "320px",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;