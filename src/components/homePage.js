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
    const data = props.data;
    if (data.loading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            {data.car.map((c) => (
                <p key={c.id}>{c.name}</p>
            ))}
        </div>
    );
};

export default graphql(getName)(Home);
