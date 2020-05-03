import { gql } from 'apollo-boost';
export const getCarQuery = gql`
    {
        car {
            id
        }
    }
`;
