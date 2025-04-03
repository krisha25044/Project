<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;

  const submit=document.getElementById('submit');
  submit.addEventListener("click",function(event) {
    event.preventDefault()
    alert(5)
  })
</script>