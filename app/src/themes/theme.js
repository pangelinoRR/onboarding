import { colors, createTheme } from "@mui/material";

/**
 * Application theme for Material UI.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: colors.amber[500],
    },
    error: {
      main: "#EF4444",
    },
  },
});

export default theme;
