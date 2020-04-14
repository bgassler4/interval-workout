import React from "react";
import "./App.css";
import CustomizeWorkoutForm from "./Form/CustomizeWorkoutForm";
import MenuAppBar from "./MenuAppBar";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <br />
      <CustomizeWorkoutForm />
    </div>
  );
}

export default App;
