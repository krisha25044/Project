  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js"
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"
import { getDatabase, ref, set } from "firebase/database";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqpJhgatr2k88NVOp2g2YfaVP5TNeV1e4",
    authDomain: "loginapp-58467.firebaseapp.com",
    projectId: "loginapp-58467",
    storageBucket: "loginapp-58467.firebasestorage.app",
    messagingSenderId: "707263330037",
    appId: "1:707263330037:web:67eeefc5c04754bba237bc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submit-btn");
  
    // Add event listener to the submit button
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  const db = getDatabase();
  set(ref(db, 'users/' + k), {
    email: email,
    password:password
  });
}
      // Get values of the input fields
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

  
      // Perform validation or actions
      if (name && email && password) {
        alert("Form Submitted Successfully");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

  
        // Here you can add logic to submit data, e.g., to Firebase, or make an API request.
      } else {
        alert("Please fill in all required fields.");
      }
    });