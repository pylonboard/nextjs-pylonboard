import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.pylonboard.money/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
});

export default client;
