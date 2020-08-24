import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo-cache-persist";
import { resolvers } from "./resolvers";

const cache = new InMemoryCache({
  addTypename: false,
});

persistCache({
  cache,
  storage: window.sessionStorage,
});

export const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache,
  resolvers,
});
