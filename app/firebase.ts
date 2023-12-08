// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5ZP2gTz2yzOmXISS_ePy1zeA0Q5rV2Q",
  authDomain: "good-way-giver-site.firebaseapp.com",
  projectId: "good-way-giver-site",
  storageBucket: "good-way-giver-site.appspot.com",
  messagingSenderId: "1031700302409",
  appId: "1:1031700302409:web:1d96dafe38033c3ed7cd98",
  measurementId: "G-H2Z02VSX11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);