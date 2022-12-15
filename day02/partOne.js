const fs = require("fs");

// fs.readFile("/path/to/file", "encoding-type", (err, data) => {}

fs.readFile("input.txt", "utf-8", (error, data) => {
  // fs.readFile("sampleInput.txt", "utf-8", (error, data) => {
  const lines = data
    .trim() // remove any starting/ending space unseen
    .split("\n") // split on newline ['A Y', 'B X']
    .map((line) => line.split(" ")); // converts each line into a string of letters in an array [['A', 'Y'], ['B', 'X']]
  // .map(Number);
  console.log(lines);
  // });
  // assign moves to point values
  const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  // Create a mapInput from the moves (reference enums)
  const mapInput = {
    A: moves.rock, // 1
    B: moves.paper, // 2
    C: moves.scissors, // 3
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  };

  // function to see winning, drawing and losing and their score
  function score(opponentMove, userMove) {
    // Draw
    if (opponentMove === userMove) {
      // console.log("TIE" + opponentMove, userMove);
      console.log("TIE");
      return userMove + 3;
    }

    // WIN conditions:

    if (
      (opponentMove === moves.rock && userMove === moves.paper) ||
      (opponentMove === moves.paper && userMove === moves.scissors) ||
      (opponentMove === moves.scissors && userMove === moves.rock)
    ) {
      console.log("WIN!!");
      return userMove + 6;
    }

    // LOSE conditions:

    console.log("LOSER");
    return userMove;
  }

  function partOne() {
    console.log("partOne function called");

    const gameOutcomes = lines.map((line) => {
      // const opponentMove = line[0]; // A, B, C
      // const userMove = line[1]; // Y, Z, X
      // The above needs to be converted from A, B, C to Rock, Paper, Sisscors; Create the mapInput to do this...
      const opponentMove = mapInput[line[0]];
      const userMove = mapInput[line[1]];
      // console.log({ opponentMove, userMove });
      return score(opponentMove, userMove);
    });
    console.log(gameOutcomes);
    console.log(gameOutcomes.reduce((a, b) => a + b, 0));
  }

  partOne(); // 9651
});
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   const game = {
//     "A X": 3, // Computer: Rock, User: Rock         -->   User 3 points for a draw
//     "A Y": 6, // Computer: Rock, User: Paper        -->   User 6 points for winning
//     "A Z": 0, // Computer: Rock, User: Scissors     -->   User 0 points for losing

//     "B X": 0, // Computer: Paper, User: Rock        -->   User 0 points for losing
//     "B Y": 3, // Computer: Paper, User: Paper       -->   User 3 points for a draw
//     "B Z": 6, // Computer: Paper, User: Scissors    -->   User 6 points for winning

//     "C X": 6, // Computer: Scissors, User: Rock     -->   User 6 points for winning
//     "C Y": 0, // Computer: Scissors, User: Paper    -->   User 0 points for losing
//     "C Z": 3, // Computer: Scissors, User: Scissors -->   User 3 points for a draw
//   };

//   const result = {
//     X: 1,
//     Y: 2,
//     Z: 3,
//   };
//   const score = data
//     .split("\n") // console.log("The score is " + score); // [ 'A Y', 'B X', etc]
//     .reduce((score, round) => {
//       score += game[round]; // A
//       score += result[round[2]]; // X
//       return score;
//     }, 0);
//   console.log(score); // 9651
// });
/*

const fs = require("fs");

// fs.readFile("/path/to/file", "encoding-type", (err, data) => {}
fs.readFile("input.txt", "utf-8", (error, data) => {
  // console.log(data.length);
"The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. 
The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. 

Your total score is the sum of your scores for each round. 

The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) PLUS the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y: Paper -->      (W) 8 points total (2 pts for Paper and 6 points for winning)
B X: Rock -->       (L) 1 point total (1 pt for choosing Rock and 0 points for losing)
C Z: Scissors -->   (D) 8 points total (3 pts for Scissors and 3 points for a draw)

The total here wouild be 15 points. (8 + 1 + 6)


QUESTION TO SOLVE: What would your total score be if everything goes exactly according to your strategy guide?

*/
