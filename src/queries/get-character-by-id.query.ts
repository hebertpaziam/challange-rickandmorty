import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      location {
        id
        name
        type
        dimension
      }
      origin {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export { GET_CHARACTER_BY_ID };
