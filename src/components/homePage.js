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
            <div className="container text-center mb-2 ">
                <h2 className="lead">
                    آیا شما میخواهید به حساب کاربری خود وارد شوید یا حساب جدیدی
                    برای خود بسازید؟
                </h2>
                <Link
                    className="m-1 btn btn-sm bg-primary text-white"
                    to="/login"
                >
                    Login
                </Link>
                <Link
                    className="m-1 btn btn-sm bg-primary text-white"
                    to="/register"
                >
                    register
                </Link>
            </div>
            <div className="d-flex ">
                <div className="container inline cars">
                    <div className="lam text-white mr-auto bg-primary ">
                        asss
                    </div>
                    <div className="lam text-white mx-auto">slaam</div>
                    <div className="lam text-white ml-auto ">aیmin</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
