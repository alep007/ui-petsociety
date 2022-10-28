import React from "react";
import ThemeProvider from "./appBase/theme/ThemeProvider";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
