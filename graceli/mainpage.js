import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "green" }}>petcare</div>
      <br></br>
      <div style={{ backgroundColor: "blue" }}>
        <div>Three step process</div>
        <ol>
          <li>pick your location</li>
          <li>find a care giver</li>
          <li>schedule date & time</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
