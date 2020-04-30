import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import apolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Login from './components/login';
import Home from './components/homePage';
import NotFound from './components/notFound';

const client = new apolloClient({
    uri: 'http://localhost:8000/graphQl ',
});
const App = () => {
    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </ApolloProvider>
    );
};

export default App;
