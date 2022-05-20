import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://extraordinary-stroopwafel-905036.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Alanta
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/alantaa/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
