export type ThemeType = typeof theme;

export const theme = {
  colors: {
    blue: "#5429CC",
    lightBlue: "#6933FF",
    green: "#33CC95",
    red: "#E52E4D",
    white: "#FFFFFF",
    title: "#363F5F",
    text: "#969CB2",
    background: "#F0F2F5",
  },

  spacings: {
    xxsmall: "6px",
    xsmall: "14px",
    small: "24px",
    medium: "32px",
  },

  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bold: 600,
    light: 400,
    extraBold: 900,
    sizes: {
      xxxsmall: "1.2rem",
      xxsmall: "1.4rem",
      xsmall: "1.6rem",
      small: "1.8rem",
      medium: "2.2rem",
      large: "2.6rem",
      xlarge: "3.4rem",
      xxlarge: "5.2rem",
      xxxlarge: "7.2rem",
    },
  },

  border: {
    medium: "5px",
  },
};
