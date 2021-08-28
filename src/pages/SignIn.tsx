import { useEffect } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import { useToasts } from "react-toast-notifications";

import { client, isSignedVar, tokenVar, profileVar } from "../apollo";

const SIGN_IN_MUTATION = gql`
  mutation ($input: SignInInput!) {
    signIn(input: $input) {
      ok
      error
      token
      profile {
        name
        email
        picture
      }
    }
  }
`;

export const SignIn = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    const handleStateChange = async (user: firebase.User | null) => {
      if (!user) return;

      const result = await firebase.auth().getRedirectResult();
      if (result.credential) {
        var credential = result.credential as firebase.auth.OAuthCredential;
        const gqlResult = await client.mutate({
          mutation: SIGN_IN_MUTATION,
          variables: {
            input: {
              accessToken: credential.accessToken,
            },
          },
        });
        const { ok, error, token, profile } = gqlResult.data.signIn;
        if (ok && profile) {
          addToast(`Welcome, ${profile.name}`, {
            appearance: "success",
            autoDismiss: true,
          });
          isSignedVar(true);
          tokenVar(token);
          profileVar({
            name: profile.name,
            email: profile.email,
            picture: profile.picture,
          });
          history.push("/");
        } else {
          addToast(`Fail to Sign-In: ${error}`, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      }
    };
    const unsubscribe = firebase.auth().onAuthStateChanged(handleStateChange);
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex-grow bg-gray-100 w-full flex flex-col gap-y-10 justify-center items-center">
      <button
        onClick={() => {
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          firebase.auth().signInWithRedirect(provider);
        }}
      >
        구글계정으로 로그인
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
