import React, { useState } from "react";
import { QueryHookOptions, useQuery } from "@apollo/client";

// CSS
import "../styles/Buttons.css";

// Queries
import QueryGenerator, { query } from "../queries/queries.ts";

function Buttons({ sendUpdateScreenEvent }) {
  const [currentQuery, updateQuery] = useState(query);

  const { data } = useQuery(currentQuery, {
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
  } as QueryHookOptions);

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

    sendUpdateScreenEvent(Math.random());
    updateQuery(new QueryGenerator().getQuery());
  };

  return (
    <div className="App-main-buttons" onClick={createEpisode}>
      <button id="App-main-buttons-create">New episode</button>
    </div>
  );
}

export default Buttons;
