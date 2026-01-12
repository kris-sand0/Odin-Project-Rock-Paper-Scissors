# The Odin Project: Rock Paper Scissors

This project implements a classic Rock Paper Scissors game, played in the browser's developer console. It's part of The Odin Project's Foundations Course, focusing on fundamental JavaScript concepts.

## How to Play

1.  **Open `index.html`:** Navigate to the project directory and open the `index.html` file in your web browser.
2.  **Open Developer Console:** Right-click anywhere on the page, then select "Inspect" (or similar, depending on your browser) to open the developer tools. Go to the "Console" tab.
3.  **Start the Game:** The game (`playGame()` function) will automatically start when the page loads. You will be prompted to enter your choice ("rock", "paper", or "scissors") for each of the 5 rounds.
4.  **Follow Console Output:** The console will display the choices made by you and the computer, the winner of each round, current scores, and finally, the overall winner after 5 rounds.

## Technologies Used

*   **HTML:** For the basic page structure (`index.html`).
*   **JavaScript:** For all the game logic, including:
    *   Getting computer's random choice.
    *   Getting human's choice via `prompt()`.
    *   Determining round winners and updating scores.
    *   Running the 5-round game loop.

## Learning Objectives (from The Odin Project)

This exercise helped reinforce concepts such as:

*   JavaScript functions.
*   Conditional statements (`if`/`else if`/`else`).
*   Loops (`for` loop).
*   User input (`prompt()`).
*   Random number generation (`Math.random()`).
*   String manipulation (e.g., `toLowerCase()`).

## Project Structure

*   `index.html`: The main HTML file.
*   `index.js`: Contains all the JavaScript game logic.
*   `README.md`: This file.
