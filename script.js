// ---------------------------
// tufailtts App - script.js
// ---------------------------

// Select input and button from HTML
const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');

// Check if browser supports speech synthesis
if ('speechSynthesis' in window) {
    speakButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text !== "") {
            // Create a new SpeechSynthesisUtterance
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Optional: change voice or rate
            utterance.rate = 1;       // Speed (0.5 - 2)
            utterance.pitch = 1;      // Pitch (0 - 2)

            // Speak the text
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Please enter some text to speak!");
        }
    });
} else {
    alert("Sorry, your browser does not support Text-to-Speech.");
}
