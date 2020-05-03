import { combineReducers } from 'redux';
import { email, password } from './loginReducer';
import {
    emailRegister,
    passwordRegister,
    usernameRegister,
} from './registerReducer';
export const reduers = combineReducers({
    email,
    password,
    emailRegister,
    passwordRegister,
    usernameRegister,
});
