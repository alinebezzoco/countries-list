import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const FormContainer = styled.form`
  aligh-items: center;
  background: #fff;
  display: flex;
  padding: 24px;
`;

const FormImage = styled.div`
  margin-right: 20px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  display: block;
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 20px;
  margin-bottom: 10px;
  padding: 10px;
  width: 20em;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  box-shadow: none;
  border-style: none;
  cursor: pointer;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
`;

export function Form({ country, onUpdate }) {
  const [countryItem, setCountry] = useState(country);

  function handleChangeInput({ target }) {
    setCountry((country) => ({
      ...country,
      [target.name]: target.value,
    }));
  }

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        onUpdate({
          variables: {
            country: countryItem,
          },
        });
      }}
    >
      <FormImage>
        <img
          src={country?.flag?.svgFile}
          alt={`this is ${country?.name} flag`}
          title={`this is ${country?.name} flag`}
          width="300"
        />
      </FormImage>
      <FormContent>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={countryItem?.name}
          readOnly
        />
        <StyledLabel htmlFor="capital">Capital</StyledLabel>
        <StyledInput
          type="text"
          id="capital"
          name="capital"
          value={countryItem?.capital}
          readOnly
        />
        <StyledLabel htmlFor="population">Population</StyledLabel>
        <StyledInput
          type="number"
          id="population"
          name="population"
          onChange={handleChangeInput}
          defaultValue={countryItem?.population ?? ""}
        />
        <StyledLabel htmlFor="area">Area</StyledLabel>
        <StyledInput
          type="number"
          id="area"
          name="area"
          onChange={handleChangeInput}
          defaultValue={countryItem?.area ?? ""}
        />
        <StyledLabel htmlFor="domain">Top Level Domain</StyledLabel>
        <StyledInput
          type="text"
          id="domain"
          name="domain"
          onChange={handleChangeInput}
          defaultValue={
            countryItem?.topLevelDomains
              ? countryItem?.topLevelDomains.map((domain) => domain?.name)
              : ""
          }
          readOnly
        />
        <StyledButton type="submit">Update</StyledButton>
        <StyledLink to={`/`} data-testid="cancel">
          Back to Home
        </StyledLink>
      </FormContent>
    </FormContainer>
  );
}
