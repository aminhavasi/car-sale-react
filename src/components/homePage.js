import React from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <div>Home pge</div>
        </React.Fragment>
    );
};

export default graphql(getName)(Home);
