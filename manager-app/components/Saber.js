import { gql }from 'apollo-boost';
import { Query  } from 'react-apollo';

const GET_MOVIES = gql`
  query shop {
    name
    products(first:10) {
      edges {
        node {
          id
        }
      }
    }
  }

`

const Saber = () => (
    <Query query={GET_MOVIES}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        console.log(data)
        return (
          <div>{data}</div>
        )
      }}
    </Query>
  )

export default Saber