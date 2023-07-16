import { gql } from '@apollo/client';

export const ADD_SUPERHERO = gql`
  mutation addSuperhero(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addSuperhero(name: $name, street: $street, city: $city, phone: $phone) {
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

export const EDIT_SUPERHERO = gql`
  mutation editSuperhero(
    $id: ID!
    $name: String!
    $phone: String
    $street: String!
    $city: String!
  ) {
    id
    name
    phone
    address {
      street
      city
    }
  }
`;
