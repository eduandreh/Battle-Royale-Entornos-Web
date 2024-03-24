// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAatCb4KUIRPnr435PhBWha3sJ3pbZpULQ",
  authDomain: "battle-royale-8ef31.firebaseapp.com",
  projectId: "battle-royale-8ef31",
  storageBucket: "battle-royale-8ef31.appspot.com",
  messagingSenderId: "489167502219",
  appId: "1:489167502219:web:7739ddf7c6a6079c1fcd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = firebase.storage();