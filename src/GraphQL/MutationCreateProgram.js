import gql from 'graphql-tag';

export default gql`
mutation ($input: CreateProgramInput!) {
  createProgram(input: $input) {
    id
    name
    owner
    createdAt
    file {
      region
      bucket
      key
    }
  }
}`;
