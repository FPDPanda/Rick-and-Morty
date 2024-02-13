import React, { useState, useMemo } from "react";

// CSS
import "../styles/Screen.css";

// Components
import Episode from "./Episode";

function Screen({ screenShouldUpdate }) {
  let [data] = useState([]);
  let [loading, setLoading] = useState(false);

  useMemo(() => {
    const setNewEpisode = () => {
      setLoading(true);
      for (let i = 1; i < localStorage.length + 1; i++) {
        if (!data.some((e) => e.episodeNumber === i)) {
          const episode = JSON.parse(localStorage.getItem("episode" + i));
          data.push(episode);
        }
      }

      setLoading(false);
    };
    setNewEpisode();
  }, [data, screenShouldUpdate]);

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
        {data.map((episode, key) => (
          <div key={key}>
            <Episode
              episodeNumber={episode.episodeNumber}
              episodeCharacters={episode.characters}
              episodeLocations={episode.locations}
            />
          </div>
        ))}
      </aside>
    );
  }
}

export default Screen;
