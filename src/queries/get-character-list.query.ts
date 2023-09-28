import { gql } from "@apollo/client";

const GET_CHARACTER_LIST = gql`
  query GetCharacterList($page: Int!, $filter: FilterCharacter!) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        gender
        status
      }
    }
  }
`;

export { GET_CHARACTER_LIST };
