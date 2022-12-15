const fs = require("fs");

// fs.readFile("input.txt", "utf-8", (error, data) => {
fs.readFile("sampleInput.txt", "utf-8", (error, data) => {
  const lines = data
    .trim()
    .split("\n") // split on newline ['A Y', 'B X']
    .map((line) => line.split(" ")); // converts each line into a string of letters in an array [['A', 'Y'], ['B', 'X']]
  // .map(Number);
  console.log(lines);
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

  // function to check for win, lose or draw and their score
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
  console.log("hello there");
  const solution = {
    A: {
      //rock
      X: moves.scissors, //lose
      Y: moves.rock, //draw
      Z: moves.paper, //win
    },
    B: {
      //paper
      X: moves.rock,
      Y: moves.paper,
      Z: moves.scissors,
    },
    C: {
      //scissors
      X: moves.paper,
      Y: moves.scissors,
      Z: moves.rock,
    },
  };
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

  partOne(); //

  function partTwo() {
    const gameOutcomes = lines.map((line) => {
      const opponentMove = mapInput[line[0]];
      // const userMove = mapInput[line[1]]; // PART ONE METHOD
      // Determine the userMove from the instructions
      const userMove = solution[line[0]][line[1]];

      // console.log({ opponentMove, userMove });
      return score(opponentMove, userMove);
    });
    console.log(gameOutcomes.reduce((a, b) => a + b, 0));
  }
  partTwo();
});
/*
--- Part Two ---
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says... 
*** how the round needs to end: 
    - X means you need to lose, 
    - Y means you need to end the round in a draw, and 
    - Z means you need to win.  ***

    - 0 points if you lost, 
    - 3 points if you draw,
    - 6 points if you win.
    - 1 point for using rock
    - 2 points for using paper
    - 3 points for using scissors

The total score is still calculated in the same way, but now you need to... 
**** figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?


*/
