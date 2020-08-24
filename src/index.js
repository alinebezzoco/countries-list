import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import * as serviceWorker from "./serviceWorker";
import { client } from "./services";

import Home from "./views/home/home";
import Details from "./views/details/details";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ApolloProvider client={client}>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
        </ApolloProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
