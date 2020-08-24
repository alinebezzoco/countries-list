import { useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_COUNTRY_DETAILS_QUERY } from '../services/queries';

export function useCountry() {
    const [queryCountry, { loading, error, data }] = useLazyQuery(
        GET_COUNTRY_DETAILS_QUERY
    );
    const country = useMemo(() => {
        if (data) {
            return data.Country[0];
        }
    }, [data]);
    return [queryCountry, { loading, error, country }];
}
