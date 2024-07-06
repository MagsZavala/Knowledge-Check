# Knowledge-Check Quiz


Description

Welcome to Knowledge Check Quiz! This project is designed to help you practice and test your knowledge of Web APIs and JavaScript fundamentals. The quiz is a timed, interactive challenge featuring multiple-choice questions. You'll receive feedback on each answer, and your final score will be saved so you can track your progress over time.

User Story
Acceptance Criteria
Installation
Usage
Mock-Up
Features
Deployment
Grading Requirements
Review
License

User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript APIs fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

Simplified Acceptance Criteria

This project requires the following features:
-Questions: Display a list of questions with multiple-choice answers.
-Start Quiz: Show the first question when the user clicks the start button.
-Next Question: Move to the next question after an answer is provided.
-Game Over: Display a game over screen when all questions are answered or the timer reaches 0.
-Timer: Start a countdown timer when the quiz begins, and subtract time for incorrect answers.
-Scoring: Show the player’s score based on the remaining time.
-Save Score: Allow the player to save their initials and score, and display a list of high scores.
-High Score Access: Provide a link to view the high score list at any time.


Installation
To run this project locally, follow these steps:

Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/web-apis-quiz.git
Navigate to the project directory:
bash
Copy code
cd web-apis-quiz
Open index.html in your preferred web browser.
Usage
Enter your name and click the Start Quiz button to begin.
Answer each question as they appear. Your choice will be highlighted.
If you select an incorrect answer, 5 seconds will be subtracted from the timer.
After the last question or when the timer reaches 0, your score will be displayed.
Enter your initials to save your score and view the high score list.
Use the View High Scores link to see the high score list at any time.
You can choose to restart the quiz or delete all high scores.
Mock-Up
The following animation demonstrates the application functionality:


Features
Dynamic Questions: Questions and options are loaded dynamically from a JavaScript object.
Timer: The countdown timer starts when the quiz begins and decreases further with incorrect answers.
Real-Time Feedback: Immediate feedback is given for correct and incorrect answers.
High Scores: High scores are saved in local storage and can be viewed at any time.
Responsive Design: The interface is designed to be clean, polished, and responsive across different devices.
Deployment
You can view the live application here: Web APIs Quiz Application

Grading Requirements
Technical Acceptance Criteria: 40%
Meets all acceptance criteria described above.
Deployment: 32%
The application is deployed at a live URL.
The application loads with no errors.
The GitHub repository is submitted with the application code.
Application Quality: 15%
The application has an intuitive and easy-to-navigate user experience.
The user interface style is clean and polished.
The application resembles the provided mock-up in functionality.
Repository Quality: 13%
The repository has a unique name.
It follows best practices for file structure, naming conventions, and code quality.
It contains multiple descriptive commit messages.
It includes a detailed README file with description, screenshot, and link to the deployed application.
Review
For this assignment, submit the following for review:

The URL of the functional, deployed application.
The URL of the GitHub repository, with a unique name and a readme describing the project.
License
This project is licensed under the MIT License - see the LICENSE file for details.

