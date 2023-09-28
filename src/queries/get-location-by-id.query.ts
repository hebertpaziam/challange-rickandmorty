import { gql } from "@apollo/client";

const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        species
        gender
        status
      }
    }
  }
`;

export { GET_LOCATION_BY_ID };
