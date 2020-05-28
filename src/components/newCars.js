import React from 'react';

const NewCars = () => {
    return (
        <React.Fragment>
            <div className="d-flex ">
                <div className="container py-3 py-sm-5">
                    <h3 className="text-center mb-2">What are the new cars?</h3>

                    <div
                        className="row  text-center justify-content-center text-white"
                        style={{ backgroundColor: '#1a1a1a' }}
                    >
                        <div className="col-12 col-sm-12 col-lg-3 m-1 bg-dark">
                            <img
                                src={require('./../resource/img/bmw.jpg')}
                                className="img-fluid image"
                            />
                            <p
                                style={{ wordBreak: 'break-all' }}
                                className="mt-4 bg-primary w-50 mx-auto lead"
                            >
                                BMW
                            </p>
                            <p
                                className="lead"
                                style={{ wordBreak: 'break-all' }}
                            >
                                Bayerische Motoren Werke AG, translated in
                                English as Bavarian Motor Works, commonly
                                referred to as BMW, is a German multinational
                                company which produces luxury vehicles and
                                motorcycles
                            </p>
                            <p className="bg-primary">3000$</p>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-3 m-1 bg-dark">
                            <img
                                src={require('./../resource/img/bmw.jpg')}
                                className="img-fluid image"
                            />
                            <p
                                style={{ wordBreak: 'break-all' }}
                                className="mt-4 bg-primary w-50 mx-auto lead"
                            >
                                FERRARI
                            </p>
                            <p
                                className="lead"
                                style={{ wordBreak: 'break-all' }}
                            >
                                Ferrari is an Italian-Dutch luxury sports car
                                manufacturer based in Maranello. Founded by Enzo
                                Ferrari in 1939 out of Alfa Romeo's race
                                division as Auto Avio Costruzioni, the company
                                built its first car in 1940
                            </p>
                            <p className="bg-danger">6000$</p>
                        </div>{' '}
                        <div className="col-12 col-sm-12 col-lg-3 m-1 bg-dark">
                            <img
                                src={require('./../resource/img/bmw.jpg')}
                                className="img-fluid image"
                            />
                            <p
                                style={{ wordBreak: 'break-all' }}
                                className="mt-4 bg-primary w-50 mx-auto lead"
                            >
                                PORCHE
                            </p>
                            <p
                                className="lead"
                                style={{ wordBreak: 'break-all' }}
                            >
                                {' '}
                                Dr.-Ing. h.c. F. Porsche AG, usually shortened
                                to Porsche AG, is a German automobile
                                manufacturer specializing in high-performance
                                sports cars, SUVs and sedans. The headquarters
                                of Porsche AG is in Stuttgart, and is owned by
                                Volkswagen AG, a controlling stake of which is
                                owned by Porsche Automobil Holding SE
                            </p>
                            <p className="bg-warning">5600$</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    );
};
export default NewCars;
