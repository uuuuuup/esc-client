import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isSignedVar = makeVar(0);

export const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4000/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isSignedIn: {
            read() {
              return isSignedVar();
            },
          },
        },
      },
    },
  }),
});
