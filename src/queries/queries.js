import { gql } from "graphql-tag";

function setCharIds() {
  let charIds = [];

  let numberBetweenThreeAndEight = Math.floor(Math.random() * 6) + 3;

  for (let i = 0; i < numberBetweenThreeAndEight; i++) {
    charIds.push(Math.floor(Math.random() * 671) + 1);
  }

  return charIds;
}

function setLocIds() {
  let charIds = [];

  let numberBetweenThreeAndEight = Math.floor(Math.random() * 3) + 3;

  for (let i = 0; i < numberBetweenThreeAndEight; i++) {
    charIds.push(Math.floor(Math.random() * 108) + 1);
  }

  return charIds;
}

let getCharactersAndLocationsQuery =
  `
    {
        charactersByIds(ids: [` +
  setCharIds() +
  `]) {
            id
            name
            image
        }

        locationsByIds(ids: [` +
  setLocIds() +
  `]) {
            id
            name
        }
    }
`;

let queryCharactersAndLocations = gql`
  ${getCharactersAndLocationsQuery}
`;

export { queryCharactersAndLocations };
