import React, { useState } from "react";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";
import Nav from "./Components/Nav";

// const changeValue = () => {
//   setDate(prop.select = value)
// }



function App(props) {

  const [date, setDate] = useState(" ");
console.log(setDate)
  return (
    <div className="App">
      <div className="contain">
        <div className = "divContain"><Nav select = {setDate}/></div>
        <div className = "grid"><NasaGrid newSelect = {date}/></div>
      </div>
    </div>
  );
}

export default App;
