// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

// Function to reset the game
function resetGame() {
  randomNum = Math.floor(Math.random() * 100);
  chance = 10;
  input.disabled = false;
  input.value = "";
  checkButton.textContent = "Check";
  guess.textContent = "";
  remainChances.textContent = chance;
  guess.style.color = "#000";
}

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {
  if (checkButton.textContent === "Replay") {
    // Reset the game if the button says "Replay"
    resetGame();
    return;
  }

  // Decrement the chance variable on every click
  chance--;
  // Get the value from the input field
  let inputValue = input.value;

  // Check if the input value is equal to the random number
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "#333";
  } else {
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "#DE0611";
  }

  if (chance == 0) {
    [checkButton.textContent, input.disabled] = ["Replay", true];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
  }
});
