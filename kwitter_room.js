var firebaseConfig = {
    apiKey: "AIzaSyAR29_kA2MqMbkSqMJbn9KDvOL_m00WAiE",
    authDomain: "kwitter-project-86bb6.firebaseapp.com",
    projectId: "kwitter-project-86bb6",
    storageBucket: "kwitter-project-86bb6.appspot.com",
    messagingSenderId: "830272254323",
    appId: "1:830272254323:web:992660856b2227d9759506"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();