import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from '../common/footer';

const AllCars = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
                <div
                    className="container-fluid col-12 col-md-10 col-lg-10 col-xs-12"
                    id="section-posts"
                >
                    <div className="card shadow-lg bg-light m-2">
                        <article className="p-3">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <a href="#">Bmw</a>
                                </h3>
                                <span className="card-subtitle">
                                    <span className="fa fa-calendar m-2" />
                                    22/7/1375
                                </span>
                                <img
                                    className="card-img img-fluid"
                                    src={require('../../resource/img/bmw.jpg')}
                                    alt=""
                                />
                            </div>
                            <div className="card-body">
                                <p className="lead">sdsd</p>
                                {/* <Like post={post} /> */}
                                سیسسسسسسسسسسسسسسسسسسسسسسسسسسسس
                            </div>

                            <div className="card-footer">
                                <ul className="list-inline float-left">
                                    <li className="list-inline-item">
                                        <span className="fa fa-link m-1" />
                                        Tags:
                                    </li>
                                    <li className="list-inline-item">
                                        {/* <a href="#">{post.postTags}</a> */}
                                        سسس
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
                ))
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default AllCars;
