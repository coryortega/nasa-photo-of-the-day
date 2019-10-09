import React from "react";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className="container">
        <NasaGrid />
      </div>
    </div>
  );
}

export default App;
