import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from 'styled-components';

const Card = styled.div`
`

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
      {list.map(({ name, capital, flag }) => (
        <li>
          <p>País: {name}</p>
          <p>Capital: {capital}</p>
          <img src={flag.svgFile} width="92" />
        </li>
      ))}
    </ul>
  );
  return renderList(data.Country);
}

export default Home;
