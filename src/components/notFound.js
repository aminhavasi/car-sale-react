import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div
            style={{ minHeight: '100vh' }}
            className="bg-dark d-flex justify-content-center align-items-center text-white"
        >
            <div className="text-center">
                <p className="display-4">Opps!!</p>
                <p>page not found!</p>
                <Link className="btn btn-primary btn-sm" to="/">
                    Go Back to HomePage!
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
