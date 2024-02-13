import RickAndMortyCharacter from "./RickAndMortyCharacter";
import RickAndMortyLocation from "./RickAndMortyLocation";

interface RickAndMortyEpisode {
  episodeNumber: number;
  characters: RickAndMortyCharacter[];
  locations: RickAndMortyLocation[];
}

export default RickAndMortyEpisode;
