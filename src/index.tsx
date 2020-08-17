import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';
import Home from './views/home/home';
import Details from './views/details/details';

export const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
});


ReactDOM.render(
  <Router>
    <Switch>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
        </ApolloProvider>
      </React.StrictMode>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();