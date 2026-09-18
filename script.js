const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let targetNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

let userGuesses = [];
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attemptsDisplay");
const previousGuesses = document.getElementById("previousGuesses");
const resetButton = document.getElementById("resetButton");

submitButton.addEventListener("click", handleGuess);

guessInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleGuess();
    }
});

function handleGuess() {
    if (gameOver) {
        return;
    }

    const inputValue = guessInput.value.trim();

    if (inputValue === "") {
        showFeedback("please enter a number");
        return;
    }

    const guess = Number(inputValue);

    if (!Number.isFinite(guess)) {
        showFeedback("please enter a valid number");
        return;
    }

    if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
        showFeedback(`please enater a number between ${MIN_NUMBER} and ${MAX_NUMBER} .`);
        return;
    }

    if (userGuesses.includes(guess)) {
        showFeedback("you altredy guessed this number.");
        return;
    }

    userGuesses.push(guess);

    attempts++;

    attemptsDisplay.textContent = attempts;

    previousGuesses.textContent = userGuesses.join(", ");

    if (guess === targetNumber) {
        showFeedback(`correct the number was ${targetNumber}. `);

        gameOver = true;

        submitButton.disabled = true;

        guessInput.disabled = true;

        resetButton.style.display = "block";
    } else if (guess < targetNumber) {
        showFeedback("Too low !  try a higher number.");
    } else {
        showFeedback("Too high ! try a lower number");
    }

    guessInput.value = "";

}

function showFeedback(message) {
    feedback.textContent = message;
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
    targetNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

    userGuesses = [];

    attempts = 0;

    gameOver = false;

    attemptsDisplay.textContent = "0";

    previousGuesses.textContent = "None";

    feedback.textContent = "";

    guessInput.value = "";

    guessInput.disabled = false;

    submitButton.disabled = false;

    resetButton.style.display = "none";

    guessInput.focus();
}



