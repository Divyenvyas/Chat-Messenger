import firebase from "firebase/app";
import "firebase/auth";

export const auth =firebase.initializeApp({
    apiKey: "AIzaSyCUxIODaiLVZMoaGgzAdQxljRTyAVqVEI0",
    authDomain: "unichat-19a0f.firebaseapp.com",
    projectId: "unichat-19a0f",
    storageBucket: "unichat-19a0f.appspot.com",
    messagingSenderId: "454831266806",
    appId: "1:454831266806:web:66507beeafa42e9a8c85d7"
  }).auth();
