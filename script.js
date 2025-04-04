
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyASuHRDtJhkhHCRjQUQoCw47_4mFAoSPco",
    authDomain: "questionnaire-6ea3a.firebaseapp.com",
    projectId: "questionnaire-6ea3a",
    storageBucket: "questionnaire-6ea3a.firebasestorage.app",
    messagingSenderId: "654530508932",
    appId: "1:654530508932:web:580723374c916a0fc5aad1"
  };

   const app = initializeApp(firebaseConfig);
   // Add event listener to the form for the 'submit' event
    document.getElementById('quizForm').addEventListener('submit', function(event) {
        console.log("inside quiz form")
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values of all the radio buttons
    let responses = {
        stress: document.querySelector('input[name="stress"]:checked'),
        anxiety: document.querySelector('input[name="anxiety"]:checked'),
        sadness: document.querySelector('input[name="sadness"]:checked'),
        overwhelmed: document.querySelector('input[name="overwhelmed"]:checked'),
        concentration: document.querySelector('input[name="concentration"]:checked'),
        difficultyTalking: document.querySelector('input[name="difficultyTalking"]:checked'),
        changes: document.querySelector('input[name="changes"]:checked'),
        stressManagement: document.querySelector('input[name="stressManagement"]:checked'),
        resources: document.querySelector('input[name="resources"]:checked'),
        optimism: document.querySelector('input[name="optimism"]:checked')
    };

    // Calculate the result based on the responses
    let resultText = "Your Mental Health Quiz Results:\n\n";
    let score = 0;
    for (let question in responses) {
        if (responses[question]) {
            resultText += `${question}: ${responses[question].value}\n`;
            // Score calculation (this can be customized)
            if (responses[question].value === "Strongly Agree" || responses[question].value === "Agree") {
                score += 1;
            }
        }
    }

    // Display the result in the 'result' div
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${resultText}</pre><p>Your score: ${score} out of 10</p>`;

    // Optionally: Do something else after the form is submitted (like sending the data to a server, etc.)
});
