import React from "react";
import "./App.css";
import CustomizeWorkoutForm from "./Form/CustomizeWorkoutForm";
import MenuAppBar from "./MenuAppBar";
import FullWorkout from "./Workout/FullWorkout";
import { materialTheme } from "./Styles/materialTheme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={materialTheme}>
        <MenuAppBar />
        <br />
        <CustomizeWorkoutForm />
        <FullWorkout />
      </ThemeProvider>
    </div>
  );
}

export default App;
