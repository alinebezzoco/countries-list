import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const countries = gql`
{ 
  Country {
    name
    capital
    area
    population
    numericCode
    flag {
      svgFile
    }
    topLevelDomains {
      name
    }
  }
}
`;

function Home() {
  const { loading, error, data } = useQuery(countries);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ocorreu um erro ao carregar as informações</p>;

  const renderList = (list) => (
    <ul>
      {list.map(({ name, capital }) => (
        <li>
          {name}
          {capital}
        </li>
      ))}
    </ul>
  );
  return renderList(data.Country);
}

export default Home;
