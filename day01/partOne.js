const fs = require("fs");

// fs.readFile("/path/to/file", "encoding-type", (err, data) => {}
fs.readFile("caloriesInput.txt", "utf-8", (error, data) => {
  console.log(data.length);
  const input = data
    .split("\n")
    .map((calorieInput) => Number(calorieInput))
    .reduce(
      (acc, currentCountofCalories) => {
        if (currentCountofCalories === 0) {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(currentCountofCalories);
        }
        return acc;
      },
      [[]]
    );
  // now I should have a two dimensional array
  let sumOfMaxElf = 0;

  for (const list of input) {
    // the list is the array of calories for each elf
    // determine the total sum of each array (which is the total calories)
    const totalSumOfCalories = list.reduce(
      (acc, calories) => acc + calories,
      0
    );
    // find out which elf has the maxium amount. (will reference the sumOfMaxElf I initialied)
    if (totalSumOfCalories > sumOfMaxElf) {
      // if the the total is greater than the current sumOfMaxElf, then we need to update it to that value
      sumOfMaxElf = totalSumOfCalories;
    }
  }

  console.log(sumOfMaxElf);
});

/*
// requires you to process a block of text that is delimited by newline characters - "\n".
// These invisible characters instruct a computer TO INSERT A NEW LINE WHEN RENDERING TEXT FOR HUMAN EYES.
// These characters also serve as "delimiters" that we can use as developers to split up the input text and work with each chunk of data.
// - A delimiter is a sequence of one or more characters for specifying the boundary between separate, independent regions in plain text, mathematical expressions or other data streams.

In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).
Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

Step 1: import and bring in the fs module to get the data
  - The fs.readFile() method is used to read files on your computer. Log out the values to be sure they are all beibg retrieved. 

  Step 2: call the split method on the data and pass in "\n" to remove the line breaks and split the data accordingly.

  Step 3: Convert all the data coming in into a number type.
    - .map(Number)

  Step 4: Using the reduce function, add up each array in the data. 
    - check if calories equal zero
    - VERY IMPORTANT FOR THE REDUCE FUNCTION: The initial value needs to be an ARRAY OF AN EMPTY ARRAY
      - // const rawInput = data.split("\n");
      - // const convertedInput = rawInput.map((input) => Number(input));
      const input = data
    .split("\n")
    .map((input) => Number(input))
    .map(Number)
    .reduce(
      (acc, currentValueCalories) => {
        if (currentValueCalories === 0) {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(currentValueCalories);
        }
        return acc;
      },
      [[]]
    );

  Step 5: Store the maxium value
    - I made use of the "for of" that iterates over property values
    - determine the sum of arrays which is the total calories using the reduce function
*/
