import { gql } from "apollo-boost";

const GET_COUNTRY_DETAILS = gql`
  query CountryDetails($id: String!) {
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

export default GET_COUNTRY_DETAILS;
