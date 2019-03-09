import gql from 'graphql-tag';

export default gql`
query {
  listPrograms(limit: 100) {
    items {
      id
      name
      owner
      createdAt
      file {
        bucket
        region
        key
      }
    }
  }
}`;
