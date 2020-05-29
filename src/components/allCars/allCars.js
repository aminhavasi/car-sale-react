import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from '../common/footer';
import getPosts from './../../services/fakePosts';

const AllCars = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
                {getPosts().map((post) => (
                    <div
                        className="container-fluid col-12 col-md-10 col-lg-10 col-xs-12"
                        id="section-posts"
                        key={post.id}
                    >
                        <div className="card shadow-lg bg-light m-2">
                            <article className="p-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <a href="#">{post.postTitle}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-2" />
                                        {post.postDate}
                                    </span>
                                    <img
                                        className="card-img img-fluid"
                                        src={require('../../resource/img/bmw.jpg')}
                                        alt=""
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="lead">{post.postContent}</p>
                                </div>

                                <div className="card-footer">
                                    <ul className="list-inline float-left">
                                        <li className="list-inline-item">
                                            <span className="fa fa-link m-1" />
                                            Tags:
                                        </li>
                                        <li className="list-inline-item">
                                            {post.postTags}
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default AllCars;
