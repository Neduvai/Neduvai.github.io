
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

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var itemsProcessed = 0;

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
let htmlCode = ``;
let index=0;
const recyclerview = document.getElementById("recyclerview");
on();
db.collection("artsection").orderBy("date","desc").limit(20).get().then((querySnapshot) => {

  var bar = new Promise((resolve, reject) => {

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().title);
      htmlCode=htmlCode +`<div onclick="window.location.href='./detailed?name=${doc.id}'" class="card" style="display:flex;flex-direction:column;" >
              <img src="${doc.data().img_url}" class="curved_top"/>
              <span class="title_content_container">
                <span style="font-family:ATB;font-size:2vmax;margin-left:2vmin;padding:1vmin;max-height:50%;">${doc.data().title}</span>
                <span style="display:flex; flex-direction:row;margin-left:4vmin;padding:1.2vmin;max-height:50%;">
                  <img style="object-fit:contain;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA90lEQVRIie3TPUoDQRjG8Z8fhdhHULTOBbyA4JksY+7hBXQJWFgJSgRrA54hYqVC0ggWrsXOQhiz62Z3rPSBh4F5mf/zzhf/SqQDjDAPvkQ/JfwVeeS3UOus0RJ46SxFwLwmYPbT4vWO4XmKgNua2nXzXqrVV1xofDwv2E8RQPFaMsWZz3CREv7HtVZT28ARjnGIPcVd5JjiCQ+4wR0+m4Zu4QTPqj9Y7Cl6C4wBJtiJ4bt4XAFc+jzsGLYxDvOTOOCqJXwzrB8GeC+MgzjgvSO8nB+HnXzTKvCsAp7jdBkc7huAP3BWAx9Wwduocedt9avwxYBK+BfqJ5E+sCDlYQAAAABJRU5ErkJggg==">
                  <span style="font-family:ATM;font-size:1.4vmax;margin-left:1vmin;">${doc.data().author}</span
                </span>
              <span>
            </div>
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
await wait(1000);
off();
