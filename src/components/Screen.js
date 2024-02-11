import React, { useState, useEffect } from "react";

// CSS
import "../styles/Screen.css";

// Components
import Episode from "./Episode";

function Screen() {
  let [data] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    for (let i = 1; i < localStorage.length + 1; i++) {
      if (!data.some((e) => e.episodeNumber === i)) {
        data.push(JSON.parse(localStorage.getItem("episode" + i)));
      }
    }
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <aside className="App-main-screen">
        <p style={{ color: "#fff", textAlign: "center" }}>
          Loading episodes...
        </p>
      </aside>
    );
  } else {
    return (
      <aside className="App-main-screen">
        {data.map((episode) => (
          <Episode
            episodeNumber={episode.episodeNumber}
            episodeCharacters={episode.characters}
            episodeLocations={episode.locations}
          />
        ))}
      </aside>
    );
  }
}

export default Screen;
