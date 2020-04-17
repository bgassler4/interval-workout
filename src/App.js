import React from "react";
import "./App.css";
import MenuAppBar from "./MenuAppBar";
import { materialTheme } from "./Styles/materialTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import BaseRouter from "./BaseRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={materialTheme}>
        <MenuAppBar />
        <BaseRouter />
        <br />
      </ThemeProvider>
    </div>
  );
}

export default App;
