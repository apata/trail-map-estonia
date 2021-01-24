const theme = {
  palette: {
    primary: {
      main: "#0B132B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#006B4E",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#FAF7EF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    grey: {
      "100": "#ECEAEC",
      "400": "#847E89",
      "800": "#28272A",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: {
    d0_5: 4,
    d1: 8,
    d2: 16,
    d4: 32,
    d5: 40,
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.75,
    },
  },
};

export type ThemeInterface = typeof theme;

export default theme;
