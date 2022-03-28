import React from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./component/sideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-cyan-400">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
