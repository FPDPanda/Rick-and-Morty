import React from "react";

// CSS
import "../styles/Buttons.css";

// Queries
import { queryCharactersAndLocations } from "../queries/queries";
import { useQuery } from "@apollo/client";

function Buttons() {
  const { data } = useQuery(queryCharactersAndLocations, {
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
  });

  const createEpisode = () => {
    let newEpisodeNumber = localStorage.length + 1;
    let newEpisodeCharacters = data.charactersByIds;
    let newEpisodeLocations = data.locationsByIds;
    let newEpisode = {
      episodeNumber: newEpisodeNumber,
      characters: newEpisodeCharacters,
      locations: newEpisodeLocations,
    };

    let episodes = {
      ...newEpisode,
    };

    localStorage.setItem(
      "episode" + newEpisodeNumber,
      JSON.stringify(episodes)
    );

    window.location.reload();
  };

  return (
    <div className="App-main-buttons" onClick={createEpisode}>
      <button id="App-main-buttons-create">New episode</button>
    </div>
  );
}

export default Buttons;
