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
    return null;
};

export default graphql(getName)(Home);
