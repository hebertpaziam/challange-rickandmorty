import { gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
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

export { GET_EPISODE_BY_ID };
