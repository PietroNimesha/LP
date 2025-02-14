"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const messageContainer = document.querySelector(".message-container");

let play = true;
let noCount = 0;

// Event listener for Yes button
yesButton.addEventListener("click", handleYesClick);

// Event listener for No button
noButton.addEventListener("click", function () {
  console.log("No button clicked!"); // Debugging line to confirm click
  if (play) {
    noCount++;
    updateNoButtonText();
    if (noCount === 5) {
      play = false; // Disable further clicks after reaching 5
    }
  }
});

// Handle Yes button click
function handleYesClick() {
  titleElement.innerHTML = "YAYAYAYAYAY FINALLYYYY <3333";
  buttonsContainer.classList.add("hidden"); // Hide buttons after clicking Yes
  displayFileLink(); // Show file link below the message
}

// Display the file link
function displayFileLink() {
  const fileLink = document.createElement("a");
  fileLink.href = "file:///C:/Users/nimes/Downloads/Untitled%20document%20(1).pdf"; // Use file:// path for local files
  fileLink.textContent = "Click here cutieee"; // Button text to invite clicking
  fileLink.style.color = "#f53699"; // Link color
  fileLink.style.textDecoration = "underline"; // Underline the text
  fileLink.style.fontSize = "2rem"; // Adjust size
  fileLink.style.marginTop = "20px"; // Spacing between text and button
  fileLink.target = "_blank"; // Open the PDF in a new tab
  messageContainer.appendChild(fileLink);
}

// Update the No button text based on how many times it has been clicked
function updateNoButtonText() {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];
  noButton.innerHTML = messages[Math.min(noCount, messages.length - 1)];
}

