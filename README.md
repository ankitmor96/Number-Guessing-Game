
🎯 Number Guessing Game

A simple and interactive Number Guessing Game built using HTML, CSS, and JavaScript.

The computer randomly generates a number between 1 and 100, and the player has to guess the correct number. After every guess, the game provides feedback such as Too Low, Too High, or Correct.

🚀 Features
🎲 Random number generation between 1 and 100
🔢 User can enter a number and submit a guess
⬆️ Shows Too Low when the guess is smaller than the target
⬇️ Shows Too High when the guess is larger than the target
✅ Displays a success message when the correct number is guessed
📊 Tracks the number of attempts
📝 Displays all previous guesses
🚫 Prevents duplicate guesses
⚠️ Validates empty, invalid, and out-of-range inputs
⌨️ Supports pressing the Enter key to submit a guess
🔄 Reset button starts a new game
🔒 Disables the input and submit button after the game is completed
🛠️ Technologies Used
HTML5 – Website structure
CSS3 – Styling and layout
JavaScript (ES6) – Game logic and interactivity
📂 Project Structure
Number Guessing Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
🎮 How the Game Works
The game generates a random number between 1 and 100.
Enter your guess in the input field.
Click the Submit button or press Enter.
The game checks your guess:
If the guess is lower than the target → Too Low
If the guess is higher than the target → Too High
If the guess is correct → Correct
Your attempt count and previous guesses are displayed.
Once the correct number is guessed, the game ends.
Click Reset Game to start a new game.
🧠 JavaScript Concepts Used

This project helped me practice the following JavaScript concepts:

const and let
Variables
Functions
Conditional statements
Arrays
Math.random()
Math.floor()
Number()
Number.isFinite()
Array.includes()
Array.push()
DOM manipulation
addEventListener()
Keyboard events
Button events
Input validation
Updating HTML using textContent
Enabling and disabling form elements
🔑 Important Game Logic

The target number is generated using:

Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

This generates a random number between 1 and 100.

The game also prevents the user from guessing the same number more than once:

if (userGuesses.includes(guess)) {
    showFeedback("You already guessed this number.");
    return;
}
▶️ How to Run the Project
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Open the project

Open the project folder in VS Code.

3. Run the game

Open index.html in your browser.

You can also use the Live Server extension in VS Code.

📸 Game Features

The game interface includes:

Number input field
Submit button
Feedback message
Attempt counter
Previous guesses
Reset Game button
🎯 Learning Objective

The main purpose of this project is to practice JavaScript fundamentals by building a small interactive browser game.

It demonstrates how JavaScript can be used to:

Generate random values
Handle user input
Validate data
Track game state
Manipulate webpage elements
Respond to user actions
👨‍💻 Author

Ankit Mor

Full-Stack Web Developer | MERN Stack Developer

GitHub: ankitmor96

⭐ If you found this project useful, feel free to give it a star!
