
const firebaseConfig = {
apiKey: "AIzaSyDdVC6jAECeUxEXtymRMoF0r4onSOmLOp8",
authDomain: "neduvai.firebaseapp.com",
projectId: "neduvai",
storageBucket: "neduvai.appspot.com",
messagingSenderId: "194490091679",
appId: "1:194490091679:web:d111ba381ef9ee847fbaaa",
measurementId: "G-7LQM8JLB4J"

};

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

on();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var itemsProcessed = 0;

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
for (var i = 0, l = params.length; i < l; i++) {
     tmp = params[i].split('=');
     data[tmp[0]] = tmp[1];
}

document.getElementById("author").innerHTML = data.name;

analytics.logEvent('views', { article: data.name})

var docRef = db.collection("artsection").doc(data.name);

docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("title").innerHTML = doc.data().title;
        document.getElementById("author").innerHTML = doc.data().author;
        document.getElementById("content").innerHTML = doc.data().content;
        document.getElementById("img").src = doc.data().img_url;
        document.getElementById("author_img").src = doc.data().author_img;
        window.twttr.widgets.load();
        off();

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

(async () => {
    console.time("Slept for")
    await wait(2500)
    console.timeEnd("Slept for")
})()
