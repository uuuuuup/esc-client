import { useEffect } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { client, isSignedVar, tokenVar, userVar } from "../apollo";
import { gql } from "@apollo/client";
import { useToasts } from "react-toast-notifications";

const SIGN_UP_MUTATION = gql`
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
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    const handleStateChange = async (user: firebase.User | null) => {
      if (!user) return;

      const result = await firebase.auth().getRedirectResult();
      if (result.credential) {
        var credential = result.credential as firebase.auth.OAuthCredential;
        const gqlResult = await client.mutate({
          mutation: SIGN_UP_MUTATION,
          variables: {
            input: {
              accessToken: credential.accessToken,
            },
          },
        });
        const { ok, error, token, user } = gqlResult.data.signUp;
        if (ok) {
          addToast(`Welcome, ${user?.name}`, {
            appearance: "success",
            autoDismiss: true,
          });
          isSignedVar(true);
          tokenVar(token);
          userVar({
            name: user.name,
            email: user.email,
          });
          history.push("/");
        } else {
          addToast(`Fail to Sign-Up: ${error}`, {
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
    <div className="flex-grow bg-gray-100 w-full flex flex-col justify-center items-center">
      <button
        onClick={() => {
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          firebase.auth().signInWithRedirect(provider);
        }}
      >
        구글계정으로 회원가입
      </button>
    </div>
  );
};
