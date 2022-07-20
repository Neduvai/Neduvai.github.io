
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
var itemsProcessed = 0;

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
let htmlCode = ``;
let index=0;
db.collection("artsection").orderBy("date","asc").limit(20).get().then((querySnapshot) => {

  var bar = new Promise((resolve, reject) => {

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().title);
      htmlCode=htmlCode +`<div id="20220719" onclick="window.location.href='./detailed?name=${doc.id}'" class="waves-effect waves-red card" style="padding:1vh;" >
              <img class="responsive" src="${doc.data().img_url}"/><br>
              <span class="flow-text" style="font-style:ATM;">${doc.data().title}</span><br>
              <a href="" style="display: flex;align-items: center;"><i class="tiny material-icons">edit</i><span style="font-family:ATL;font-size:2vh;">${doc.data().author}</span></a>
            </div>
            <br>

    `;
    // COMBAK:
    if (index === querySnapshot.size -1) resolve();
    index++;
    });

});

bar.then(() => {
    recyclerview.innerHTML = htmlCode;
});

});

const recyclerview = document.getElementById("recyclerview");
