// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtTSbSLWwiCQzRgXBtqdKpPaHPNOeKvDc",
  authDomain: "gamercore-ec2e2.firebaseapp.com",
  projectId: "gamercore-ec2e2",
  storageBucket: "gamercore-ec2e2.appspot.com",
  messagingSenderId: "1092867195246",
  appId: "1:1092867195246:web:fa1cd3f6db5cc4568c417f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()