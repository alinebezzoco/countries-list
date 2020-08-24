import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { useCountry } from "../../hooks/useCountry";
import { Form } from "../../components/form/form";
import { CHANGE_COUNTRY_INFO_MUTATION } from "../../services/mutations";

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

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error: {error} </p>;
  return (
    <Container>
      {country && <Form onUpdate={changeCountry} country={country} />}
    </Container>
  );
}

export default Details;
