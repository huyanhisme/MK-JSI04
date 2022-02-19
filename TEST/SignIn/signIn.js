// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { doc, getDoc,  getFirestore} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd7Gp4D8JIeaLD6aUZpLFhIj4QPfyWpsk",
  authDomain: "checkpoint2-f5720.firebaseapp.com",
  projectId: "checkpoint2-f5720",
  storageBucket: "checkpoint2-f5720.appspot.com",
  messagingSenderId: "170612426876",
  appId: "1:170612426876:web:83482ca2533dfc0fa621f9",
  measurementId: "G-D0LR4DF81D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getFirestore();
const Signin = document.getElementById("Signin")


let getDatabyID = async () => {
  let ref = await doc(database, "Form", "Nick");
  let data = await getDoc(ref);
  let nick = data.data()
  console.log(nick);

  Signin.onsubmit = function  (e) {
    e.preventDefault();
    let acc =  Signin.acc.value;
    let password =  Signin.password.value;

    if(acc == nick.acc){
        if(password == nick.password){
            alert("Signed in successfully");
            location.assign("../index.html");
            localStorage.setItem('statusSignIn','true');
        }else {
            console.log("Wrong password or email")
            }
    } else {
        console.log("Account is not exist")
    }
}
  
}
getDatabyID()







