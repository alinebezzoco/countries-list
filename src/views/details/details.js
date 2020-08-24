import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { useCountry } from "../../hooks/useCountry";
import { CHANGE_COUNTRY_INFO_MUTATION } from "../../services/mutations";
import { Form } from "../../components/form/form";

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 52em;
`;

function Details({ match }) {
  const [queryCountry, { loading, error, country }] = useCountry();
  const [changeCountry] = useMutation(CHANGE_COUNTRY_INFO_MUTATION);

  useEffect(() => {
    queryCountry({
      variables: {
        id: match.params.id,
      },
    });
  }, [queryCountry, match.params.id]);

  // TODO: create a component and customize loading adding an icon and error notifications
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <Container>
      {country && <Form onUpdate={changeCountry} country={country} />}
    </Container>
  );
}

export default Details;
