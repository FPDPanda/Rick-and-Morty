import { gql } from "graphql-tag";

class QueryGenerator {
  characterIds: number[];
  locationIds: number[];

  constructor() {
    this.updateCharacterIds();
    this.updateLocationIds();
  }

  updateCharacterIds() {
    let characterIds: number[] = [];

    let numberBetweenThreeAndEight = Math.floor(Math.random() * 6) + 3;

    for (let i = 0; i < numberBetweenThreeAndEight; i++) {
      characterIds.push(Math.floor(Math.random() * 671) + 1);
    }

    this.characterIds = characterIds;
  }

  updateLocationIds() {
    let locationIds: number[] = [];

    let numberBetweenThreeAndEight = Math.floor(Math.random() * 3) + 3;

    for (let i = 0; i < numberBetweenThreeAndEight; i++) {
      locationIds.push(Math.floor(Math.random() * 108) + 1);
    }

    this.locationIds = locationIds;
  }

  getQuery() {
    this.updateCharacterIds();
    this.updateLocationIds();

    let getCharactersAndLocationsQuery =
      `
    {
      charactersByIds(ids: [` +
      this.characterIds +
      `]) 
        {
          id
          name
          image
        }
      locationsByIds(ids: [` +
      this.locationIds +
      `])
        {
          id
          name
        }
    }
  `;

    let queryCharactersAndLocations = gql`
      ${getCharactersAndLocationsQuery}
    `;

    return queryCharactersAndLocations;
  }
}

const query = new QueryGenerator().getQuery();

export default QueryGenerator;
export { query };
