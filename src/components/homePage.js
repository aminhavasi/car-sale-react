import React from 'react';
import { Link } from 'react-router-dom';
import './../css/homePage.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className="jumbotron bg jumbotron-fluid text-white d-flex justify-content-center aligin-items-center ">
                <div className="container text-center">
                    <h1 className="text-primary display-1 text-uppercase sh">
                        amin khodro
                    </h1>
                    <p
                        className="lead text-white  text-shadow"
                        style={{
                            backgroundColor: ' rgba(5, 0, 0, 0.2) ',
                        }}
                    >
                        شرکت خرید و فروش خودرو های ایرانی
                    </p>
                </div>
            </div>
            <div className="container text-center ">
                <Link className="m-1 btn btn-sm bg-primary" to="/login">
                    Login
                </Link>
                <Link className="m-1 btn btn-sm bg-success" to="/register">
                    register
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Home;
