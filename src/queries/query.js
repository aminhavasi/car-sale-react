import { gql } from 'apollo-boost';
export const getCarQuery = gql`
    {
        car {
            id
        }
    }
`;

export const addUser = gql`
    mutation {
        addUser(name: "", email: "", password: "") {
            id
            name
        }
    }
`;
