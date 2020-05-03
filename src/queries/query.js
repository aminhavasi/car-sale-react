import { gql } from 'apollo-boost';
const getCarQuery = gql`
    {
        car {
            id
        }
    }
`;

const addUser = gql`
    mutation($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
            id
        }
    }
`;
export { getCarQuery, addUser };
