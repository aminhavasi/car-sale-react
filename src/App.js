import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import apolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Login from './components/login';
import Home from './components/homePage';
import NotFound from './components/notFound';
import Register from './components/register';
import AllCars from './components/allCars/allCars';

const client = new apolloClient({
    uri: 'http://localhost:8000/graphQl ',
});
const App = () => {
    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/allcars" component={AllCars} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </ApolloProvider>
    );
};

export default App;
