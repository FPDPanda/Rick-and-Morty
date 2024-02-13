import React, { useState, useMemo } from "react";

// CSS
import "../styles/Screen.css";

// Components
import Episode from "./Episode";
import RickAndMortyEpisode from "../entities/RickAndMortyEpisode";

function Screen({ screenShouldUpdate }) {
  let [data] = useState([] as RickAndMortyEpisode[]);
  let [loading, setLoading] = useState(false);

  useMemo(() => {
    const setNewEpisode = () => {
      setLoading(true);
      for (let i = 1; i < localStorage.length + 1; i++) {
        if (
          !data.some(
            (episode: RickAndMortyEpisode) => episode.episodeNumber === i
          )
        ) {
          const episode = localStorage.getItem("episode" + i);

          if (episode != null) {
            const parsedEpisode = JSON.parse(episode);
            data.push(parsedEpisode);
          } else {
            throw new Error(`Could not find episode ${i} in local storage`);
          }
        }
      }

      setLoading(false);
    };
    setNewEpisode();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
