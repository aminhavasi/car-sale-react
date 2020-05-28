import React from 'react';
const Carousel = () => {
    return (
        <div className="container">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li
                        data-target="#demo"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={require('./../resource/img/bmw.jpg')}
                            alt="Los Angeles"
                            width="1100"
                            height="500"
                        />
                        <div className="carousel-caption">
                            <h3>BMW</h3>
                            <p>Best car for mad Speed!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require('./../resource/img/bmw.jpg')}
                            alt="Chicago"
                            width="1100"
                            height="500"
                        />
                        <div className="carousel-caption">
                            <h3>Ferrari</h3>
                            <p>If you want live in future!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require('./../resource/img/bmw.jpg')}
                            alt="New York"
                            width="1100"
                            height="500"
                        />
                        <div className="carousel-caption">
                            <h3>Porche</h3>
                            <p>If you want pick girls!</p>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            <hr />
        </div>
    );
};
export default Carousel;
