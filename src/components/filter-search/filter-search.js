import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  background: #fff;
  bottom: 0;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
`;

const FilterInput = styled.input`
  border: none;
  display: block;
  font-size: 16px;
  height: 60px;
  margin: 0 auto;
  padding-left: 20px;
  width: 98%;
`;

export function FilterSearch({ onChange }) {
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        id="filter-search"
        name="filter-search"
        data-testid="filter-search"
        placeholder="Search country by name"
        onKeyUp={onChange}
      />
    </FilterContainer>
  );
}
