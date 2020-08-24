import { GET_COUNTRY_DETAILS_QUERY } from './queries';

export const resolvers = {
    Mutation: {
        changeCountryInfo: (_, { country }, { cache }) => {
            const newCountry = Object.assign({}, country);
            const data = {
                Country: [newCountry],
            };
            cache.writeQuery({
                query: GET_COUNTRY_DETAILS_QUERY,
                variables: {
                    id: country._id,
                },
                data,
            });
            return data.Country;
        },
    },
};
