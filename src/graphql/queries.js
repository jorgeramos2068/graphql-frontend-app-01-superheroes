import { gql } from '@apollo/client';

export const ALL_SUPERHEROES = gql`
  query {
    allSuperheroes {
      id
      name
      phone
    }
  }
`;

export const FIND_SUPERHERO = gql`
  query findSuperhero($idToSearch: ID!) {
    findSuperhero(id: $idToSearch) {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;
