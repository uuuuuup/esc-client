import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export interface IProfile {
  name: string;
  email: string;
  picture: string;
}

export const isSignedVar = makeVar(false);
export const tokenVar = makeVar<string | null>(null);
export const profileVar = makeVar<IProfile | null>(null);

export const client = new ApolloClient({
  uri: `https://${window.location.hostname}:4000/graphql`,
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
          profile: {
            read() {
              return profileVar();
            },
          },
        },
      },
    },
  }),
});
