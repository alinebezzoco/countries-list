import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCountries } from "../../hooks/useCountries";
import { FilterSearch } from "../../components/filter-search/filter-search";
import { Card } from "../../components/card/card";

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 52em;
`;

function Home() {
  const [country, setCountry] = useState("");
  const [queryCountries, { loading, error, countries }] = useCountries();

  useEffect(() => {
    queryCountries({
      variables: { country },
    });
  }, [queryCountries, country]);

  function handleEnter({ key, target }) {
    if (key === "Enter") {
      setCountry(target.value);
    }
  }

  // TODO: create a component and customize loading adding an icon and error notifications
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <FilterSearch onChange={handleEnter} />
      <Container>
        {countries && (
          <>
            {countries.map(({ _id, name, capital, flag }) => (
              <Card
                key={_id}
                name={name}
                id={_id}
                capital={capital}
                flag={flag}
              />
            ))}
          </>
        )}
      </Container>
    </>
  );
}

export default Home;
