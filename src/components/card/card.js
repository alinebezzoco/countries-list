import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  margin: 1rem 0.25em;
  padding: 24px;
`;

const CardImage = styled.img`
  height: auto;
  padding-right: 20px;
  width: 20%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  line-height: 10px;
  margin: 0;
`;

const CardDescription = styled.p``;

const CardLink = styled(Link)`
  text-decoration: none;
`;

export function Card({ id, name, capital, flag }) {
  return (
    <CardContainer>
      <CardImage
        alt={`this is ${name} flag`}
        title={`this is ${name} flag`}
        focusable="false"
        data-testid="card-img"
        src={flag?.svgFile}
      />

      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{capital}</CardDescription>
        <CardLink to={`/details/${id}`} data-testid="card-more">
          More +
        </CardLink>
      </CardContent>
    </CardContainer>
  );
}
