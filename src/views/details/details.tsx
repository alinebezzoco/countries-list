import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';
import GET_COUNTRY_DETAILS from "../../api/GET_COUNTRY_DETAILS";

function Details({ match }) {

    const { params: { id } } = match;

    const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, { variables: { id } });
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu um erro: {error} </p>;

    return (
        <ul>
            {data.Country.map(item => (
                <li key={item._id}>
                    <p>País: {item.name}</p>
                    <p>Capital: {item.capital}</p>
                    <p>Population: {item.population}</p>
                    <p>Area: {item.area}</p>

                    <p>Top Level Domains: {item.topLevelDomains.name}</p>
                    <img src={item.flag.svgFile} width="92" />

                </li>
            ))}
        </ul>
    );
}

export default Details;
