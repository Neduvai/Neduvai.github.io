
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


db.collection("cities").doc("LSA").set({
    name: "Los South Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
