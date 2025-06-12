// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3n2a_PYyCQLmCz0C-Ovju9fP_8LXVY1Q",
  authDomain: "restuarant-client.firebaseapp.com",
  projectId: "restuarant-client",
  storageBucket: "restuarant-client.appspot.com",
  messagingSenderId: "1008203317246",
  appId: "1:1008203317246:web:021231048fd71cd7e14aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
