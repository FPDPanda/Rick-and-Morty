import RickAndMortyTypeName from "./RickAndMortyTypeName";

interface RickAndMortyCharacter {
  __typename: RickAndMortyTypeName;
  id: number;
  image: string;
  name: string;
}

export default RickAndMortyCharacter;
