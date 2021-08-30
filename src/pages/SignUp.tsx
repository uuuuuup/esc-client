import { useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import { useToasts } from "react-toast-notifications";
import { GoogleLogin } from "react-google-login";

import { client, isSignedVar, tokenVar, profileVar } from "../apollo";

const SIGN_UP_MUTATION = gql`
  mutation ($input: SignUpInput!) {
    signUp(input: $input) {
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

export const SignUp = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  const onSuccess = async (response: any) => {
    const gqlResult = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables: {
        input: {
          accessToken: response.accessToken,
        },
      },
    });
    const { ok, error, token, profile } = gqlResult.data.signUp;
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
  };

  const onFailure = (response: any) => {
    console.log("onFailure: ", response);
  };

  return (
    <div className="flex-grow bg-gray-100 w-full flex flex-col justify-center items-center">
      <GoogleLogin
        clientId="1001977532748-7jk4gmp0udr8kvgd96o32ru8tid5fpkh.apps.googleusercontent.com"
        buttonText="구글계정으로 회원가입"
        theme="dark"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        prompt="select_account"
      />
    </div>
  );
};
