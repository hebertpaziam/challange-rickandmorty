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
      location {
        name
        type
        dimension
      }
      origin {
        name
        type
        dimension
        residents {
          id
          name
        }
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export { GET_CHARACTER_BY_ID };
