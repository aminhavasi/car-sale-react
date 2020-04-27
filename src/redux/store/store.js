import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduers } from './../reducers/index';

export const store = createStore(reduers, compose(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
