import { gql } from '@apollo/client';

export const CHANGE_COUNTRY_INFO_MUTATION = gql`
  mutation changeCountryInfo($country: Country!) {
    changeCountryInfo(country: $country) @client {
      id
      name
      breed
    }
  }
`;
