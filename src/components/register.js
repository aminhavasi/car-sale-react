import React from 'react';
import {
    setEmail,
    setPassword,
    setUsername,
    sendRegisterForm,
} from './../redux/actions/registerAction';
import { useDispatch, useSelector } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose, createEventHandler } from 'recompose';
import { addUser, getCarQuery } from './../queries/query';
const Register = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const email = useSelector((state) => state.emailRegister);
    const username = useSelector((state) => state.usernameRegister);
    const password = useSelector((state) => state.passwordRegister);
    const handle = async () => {
        const { data } = await props.addUser({
            variables: {
                name: username,
                email: email,
                password: password,
            },
        });
        console.log('data: ', data);
        dispatch(sendRegisterForm());
    };
    return (
        <React.Fragment>
            <div
                style={{
                    backgroundColor: '#d1e0e0',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="container">
                    <h2 className="text-center">Register Form</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="pwd">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => dispatch(setUsername(e))}
                                name="username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Example@info.com"
                                value={email}
                                onChange={(e) => dispatch(setEmail(e))}
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => dispatch(setPassword(e))}
                                name="password"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-secondary "
                                onClick={() => handle()}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default compose(graphql(addUser, { name: 'addUser' }))(Register);
