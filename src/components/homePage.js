import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getName = gql`
    {
        car {
            name
            id
        }
    }
`;

const Home = (props) => {
    return <div>slm</div>;
};

export default graphql(getName)(Home);
