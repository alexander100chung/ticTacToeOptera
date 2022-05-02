import React, { Component } from "react";
import "./App.css";
import "./TicTacToe.css";
import Game from "./Game.js";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Game></Game>
      </div>
    );
  }
}

export default App;
