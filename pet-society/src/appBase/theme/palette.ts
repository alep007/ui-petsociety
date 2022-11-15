import { alpha } from "@mui/material";

export const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const PRIMARY = {
  lighter: "#b0acd9",
  light: "#8882c6",
  main: "#3a30a0",
  dark: "#342b90",
  darker: "#282170",
  contrastText: "#fff",
};

export const SECONDARY = {
  lighter: "#fca3cd",
  light: "#fa5ea8",
  main: "#f91983",
  dark: "#c71468",
  darker: "#ae115b",
  contrastText: "#fff",
};

export const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

export const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

export const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

export const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const palette = {
  primary: PRIMARY,
  secondary: {
    main: "#f91983",
  },
  error: ERROR,
  warning: WARNING,
  info: INFO,
  success: SUCCESS,
  divider: alpha(GREY[500], 0.24),
  grey: GREY,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
  },
};

export default palette;
