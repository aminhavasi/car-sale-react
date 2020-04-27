import { combineReducers } from 'redux';
import { email, password } from './loginReducer';
export const reduers = combineReducers({
    email,
    password,
});
