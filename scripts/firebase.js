
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdVC6jAECeUxEXtymRMoF0r4onSOmLOp8",
    authDomain: "neduvai.firebaseapp.com",
    projectId: "neduvai",
    storageBucket: "neduvai.appspot.com",
    messagingSenderId: "194490091679",
    appId: "1:194490091679:web:d111ba381ef9ee847fbaaa",
    measurementId: "G-7LQM8JLB4J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
