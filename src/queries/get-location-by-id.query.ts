import { gql } from "@apollo/client";

const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
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
