import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FDB92B",
      light: "#77429A",
    },
    secondary: {
      main: "#A15ECD",
    },
    success: {
      main: "#5ECD8A",
    },
  },

  typography: {
    fontFamily: "Poppins",
    body1: {
      fontWeight: 700,
    },
    caption: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          textTransform: "none",
        }),
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px", 
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: () => ({
          color: "#3A3A3A",
          fontSize: "16px",
          fontFamily: 'Nunito',
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#3A3A3A",
          fontWeight: 600,
        },
        placeholder: {
          color: "#B0B0B0",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        },
      },
    },
  },
});