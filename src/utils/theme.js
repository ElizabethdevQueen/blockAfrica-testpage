import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#dc004e",
        dark: "#9a0036",
        light: "#e33371",
    },
    secondary: {     
      main: "#1976d2",
      dark: "#115293",
      light: "#4791db",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default theme;