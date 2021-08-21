import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isSignedVar = makeVar(true);

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
