import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { createMemoryHistory } from "history";

import { client } from "../services";

export function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

export function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <ApolloProvider client={client} addTypename={false}>
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      </ApolloProvider>
    ),
  };
}
