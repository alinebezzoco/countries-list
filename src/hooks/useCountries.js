import { useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../services/queries";

export function useCountries() {
  const [queryCountries, { loading, error, data }] = useLazyQuery(
    GET_COUNTRIES_QUERY
  );

  const countries = useMemo(() => {
    if (data) {
      return data.Country.map((country) => country);
    }
  }, [data]);

  return [queryCountries, { loading, error, countries }];
}
