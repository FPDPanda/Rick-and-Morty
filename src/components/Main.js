import React from "react";

// CSS
import "../styles/Main.css";

// Components
import Screen from "./Screen";
import Buttons from "./Buttons";

function Main() {
  return (
    <main className="App-main">
      <Screen />
      <Buttons />
    </main>
  );
}

export default Main;
