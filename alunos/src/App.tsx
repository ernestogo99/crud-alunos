import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Approutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/themecontext";
import { Menulateral } from "./shared/components";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Menulateral>
          {" "}
          <Approutes></Approutes>
        </Menulateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
