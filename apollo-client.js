import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pylonboard-backend-ylc4b.ondigitalocean.app/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
});

export default client;