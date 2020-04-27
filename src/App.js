import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/login';
const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={null} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
        </Switch>
    );
};

export default App;
