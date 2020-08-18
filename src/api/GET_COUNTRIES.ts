import { gql } from "apollo-boost";

const GET_COUNTRIES = gql`
  {
    Country {
      _id
      name
      capital
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;

export default GET_COUNTRIES;
