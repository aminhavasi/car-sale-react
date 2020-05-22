import React from 'react';
import {
    setEmail,
    setPassword,
    sendPerson,
} from './../redux/actions/loginAction';
import { graphql } from 'react-apollo';
import { useDispatch, useSelector } from 'react-redux';

import { getCarQuery } from './../queries/query';

const Login = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                backgroundColor: ' #d1e0e0',
            }}
            className="justify-content-center align-items-center t"
        >
            <div className="row">
                <div className="">
                    <h3 className="text-center">Login</h3>
                    <p className="lead text-center">
                        Log in to your site admin account
                    </p>
                    <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                            <div className="form-group col-12 col-sm-6 col-xs-6 col-lg-6">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="example@info.com"
                                    value={email}
                                    onChange={(e) => dispatch(setEmail(e))}
                                    id="email"
                                />
                            </div>
                            <div className="form-group col-12 col-sm-6 col-xs-6 col-lg-6">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => dispatch(setPassword(e))}
                                    id="password"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                onClick={() => dispatch(sendPerson())}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default graphql(getCarQuery)(Login);
