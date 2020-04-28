import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/login';
import Home from './components/homePage';
import NotFound from './components/notFound';
const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default App;
