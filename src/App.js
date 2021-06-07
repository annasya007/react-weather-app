import React from "react";
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer className="small">
        This an open-source project coded by{" "}<a href="https://github.com/annasya007/react-weather-app" target="_blank">Anna Samokhina</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
