import { useEffect } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { client } from "../apollo";
import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation ($input: SignUpInput!) {
    signUp(input: $input) {
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

export const SignUp = () => {
  const history = useHistory();
  useEffect(() => {
    const handleStateChange = async (user: firebase.User | null) => {
      if (!user) return;

      const result = await firebase.auth().getRedirectResult();
      if (result.credential) {
        var credential = result.credential as firebase.auth.OAuthCredential;
        const gqlResult = await client.mutate({
          mutation: SIGN_UP,
          variables: {
            input: {
              accessToken: credential.accessToken,
            },
          },
        });
        const { ok, error, token } = gqlResult.data.signUp;
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
        회원가입 with Google
      </button>
    </div>
  );
};
