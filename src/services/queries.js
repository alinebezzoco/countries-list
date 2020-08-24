import { gql } from "@apollo/client";

export const GET_COUNTRIES_QUERY = gql`
  query listCountries($country: String) @client {
    Country(filter: { name_contains: $country }) {
      _id
      name
      area
      capital
      population
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS_QUERY = gql`
  query getCountryDetail($id: String!) @client {
    Country(_id: $id) {
      _id
      name
      capital
      population
      area
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;
