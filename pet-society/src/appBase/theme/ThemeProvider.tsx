import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider, alpha } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import ComponentsOverrides from "./overrides";
import customShadows from "./customShadows";

const ThemeProvider = ({ children }: any) => {
  // A custom theme for this app
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: palette,
    //@ts-ignore
    customShadows: customShadows(),
    components: {},
  });

  theme.components = ComponentsOverrides(theme);

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
