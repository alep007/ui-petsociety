import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider, alpha } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ERROR, GREY, INFO, PRIMARY, SUCCESS, WARNING } from "./colors";

const ThemeProvider = ({ children }: any) => {
  // A custom theme for this app
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      primary: PRIMARY,
      secondary: {
        main: "#f91983",
      },
      error: ERROR,
      warning: WARNING,
      info: INFO,
      success: SUCCESS,
      divider: alpha(GREY[500], 0.24),
      text: {
        primary: GREY[800],
        secondary: GREY[600],
        disabled: GREY[500],
      },
      background: {
        paper: "#fff",
        default: GREY[100],
      },
    },
    components: {},
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
