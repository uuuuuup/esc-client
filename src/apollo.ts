import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export interface IUser {
  name: string;
  email: string;
}

export const isSignedVar = makeVar(false);
export const tokenVar = makeVar<string | null>(null);
export const userVar = makeVar<IUser | null>(null);

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
          token: {
            read() {
              return tokenVar();
            },
          },
          user: {
            read() {
              return userVar();
            },
          },
        },
      },
    },
  }),
});
