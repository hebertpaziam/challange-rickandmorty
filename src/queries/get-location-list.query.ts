import { gql } from "@apollo/client";

const GET_LOCATION_LIST = gql`
  query GetLocationList($page: Int!, $filter: FilterLocation!) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export { GET_LOCATION_LIST };
