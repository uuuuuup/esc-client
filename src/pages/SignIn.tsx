import { useEffect } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import { client } from "../apollo";

const SIGN_IN = gql`
  mutation ($input: SignInInput!) {
    signIn(input: $input) {
      ok
      error
      token
      user {
        name
        email
      }
    }
  }
`;

export const SignIn = () => {
  const history = useHistory();
  useEffect(() => {
    const handleStateChange = async (user: firebase.User | null) => {
      if (!user) return;

      const result = await firebase.auth().getRedirectResult();
      if (result.credential) {
        var credential = result.credential as firebase.auth.OAuthCredential;
        const gqlResult = await client.mutate({
          mutation: SIGN_IN,
          variables: {
            input: {
              accessToken: credential.accessToken,
            },
          },
        });
        const { ok, error, token } = gqlResult.data.signIn;
        if (ok) {
          history.push("/");
        } else {
          alert(error);
        }
      }
    };
    const unsubscribe = firebase.auth().onAuthStateChanged(handleStateChange);
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => {
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          firebase.auth().signInWithRedirect(provider);
        }}
      >
        로그인 with Google
      </button>
      <button
        onClick={() => {
          history.push("/sign-up");
        }}
      >
        회원가입
      </button>
    </div>
  );
};
