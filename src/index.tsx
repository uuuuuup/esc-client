import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_wIIx3_BNDj3Ja5gkV2a0poRIJxQFAsg",
  authDomain: "educationsharingclub.firebaseapp.com",
  projectId: "educationsharingclub",
  storageBucket: "educationsharingclub.appspot.com",
  messagingSenderId: "800823104075",
  appId: "1:800823104075:web:248a80c7060dd87d3e73ce",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
