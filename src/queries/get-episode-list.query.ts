import { gql } from "@apollo/client";

const GET_EPISODE_LIST = gql`
  query GetEpisodeList($page: Int!, $filter: FilterEpisode!) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export { GET_EPISODE_LIST };
