import React, { useState } from "react";

// CSS
import "../styles/Main.css";

// Components
import Screen from "./Screen.tsx";
import Buttons from "./Buttons.tsx";

function Main() {
  const [screenShouldUpdate, sendUpdateScreenEvent] = useState(1);

  return (
    <main className="App-main">
      <Screen screenShouldUpdate={screenShouldUpdate} />
      <Buttons sendUpdateScreenEvent={sendUpdateScreenEvent} />
    </main>
  );
}

export default Main;
