import React from "react";
import ThemeProvider from "./appBase/theme/ThemeProvider";
import Routes from "./routes/Routes";
import "@fontsource/poppins/300.css";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
