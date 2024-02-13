import React, { useState } from "react";

// CSS
import "../styles/Episode.css";

// Entites
import RickAndMortyCharacter from "../entities/RickAndMortyCharacter";
import RickAndMortyLocation from "../entities/RickAndMortyLocation";

function Episode({ episodeNumber, episodeLocations, episodeCharacters }) {
  let [openEpisode, setOpenEpisode] = useState(false);

  function switchOpenEpisode() {
    setOpenEpisode(!openEpisode);
  }

  return (
    <button
      onClick={switchOpenEpisode}
      className={`App-main-screen-episode App-main-screen-episode--${
        openEpisode ? "open" : "closed"
      }`}
    >
      <div className="App-main-screen-episodeNumber">
        Episode {episodeNumber}
      </div>

      <h2 className="App-main-screen-episodeTitles">Locations</h2>

      <ul>
        {episodeLocations.map((location: RickAndMortyLocation) => (
          <li key={location.id} className="App-main-screen-episode-location">
            {location.name}
          </li>
        ))}
      </ul>

      <h2 className="App-main-screen-episodeTitles">Characters</h2>
      <ul>
        {episodeCharacters.map((character: RickAndMortyCharacter) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name}></img>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </button>
  );
}

export default Episode;
