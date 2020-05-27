import React from 'react';

const NewCars = () => {
    return (
        <React.Fragment>
            <div className="d-flex ">
                <div className="container inline cars">
                    <div className="lam text-white mr-auto w-25 ">
                        <img
                            className="image"
                            src={require('./../resource/img/bmw.jpg')}
                        />
                    </div>
                    <div className="lam text-white mr-auto w-25 ">
                        <img
                            className="image"
                            src={require('./../resource/img/bmw.jpg')}
                        />
                    </div>{' '}
                    <div className="lam text-white mr-auto w-25 ">
                        <img
                            className="image"
                            src={require('./../resource/img/bmw.jpg')}
                        />
                    </div>
                </div>
            </div>
            ;
        </React.Fragment>
    );
};
export default NewCars;
