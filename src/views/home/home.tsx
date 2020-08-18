import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';
import GET_COUNTRIES from '../../api/GET_COUNTRIES';

const Card = styled.div`
`
function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ocorreu um erro ao carregar as informações</p>;

  return (
    <ul>
      {data.Country.map(item => (
        <li key={item._id}>
          <p>País: {item.name}</p>
          <p>Capital: {item.capital}</p>
          <p>Top Level Domains: {item.topLevelDomains.name}</p>

          <img src={item.flag.svgFile} width="92" />

          <Link to={`/details/${item._id}`}>Saiba mais</Link>

        </li>
      ))}
    </ul>
  );
}

export default Home;
