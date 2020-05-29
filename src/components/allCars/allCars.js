import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from '../common/footer';

const AllCars = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
                no post for see
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default AllCars;
