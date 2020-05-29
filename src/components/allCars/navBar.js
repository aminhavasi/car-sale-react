import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="#">
                    <img
                        src={require('./../../resource/img/logo.png')}
                        alt="logo"
                        style={{ width: '40px' }}
                    />
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="btn btn-sm btn-primary" to="#">
                            Login
                        </Link>
                    </li>
                </ul>
                <p className="ml-auto text-white">
                    امین خودرو ارايه دهنده انواع خودروهای بین المللی
                </p>
            </nav>
        </React.Fragment>
    );
};
export default NavBar;
