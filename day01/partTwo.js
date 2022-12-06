const fs = require("fs");

// fs.readFile("/path/to/file", "encoding-type", (err, data) => {}
fs.readFile("input.txt", "utf-8", (error, data) => {
  // console.log(data.length);
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

  let maxElves = []; // needed to update this from a number to an array.

  // the list is the array of calories for each elf
  for (const list of input) {
    // determine the total sum of each array (which is the total calories)
    const totalSumOfCalories = list.reduce(
      (acc, calories) => acc + calories,
      0
    );
    // Add 3 sums in the array
    if (maxElves.length < 3) {
      // console.log(maxElves);
      maxElves.push(totalSumOfCalories);
    } else {
      // [x] Get the minium value/number of calories from the "maxElves array".
      const currentMiniumSumOfCalories = Math.min(...maxElves);
      // [x] compare to see if the totalSumOfCalories is greater than the minium amount of calories from above
      if (totalSumOfCalories > currentMiniumSumOfCalories) {
        // [x]  inside the maxElves array, get the index value of the currentMiniumSumOfCalories. Replace that specific index position with the new value of currentMiniumSumOfCaories.
        maxElves[maxElves.indexOf(currentMiniumSumOfCalories)] =
          totalSumOfCalories;
      }
    }
  }

  // [x] Get the sum of the 3 values from the array
  let totalAmountOfCalories = maxElves[0] + maxElves[1] + maxElves[2];
  console.log(totalAmountOfCalories);
});

/*
--- Part Two ---
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks. 
To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the TOP THREE Elves carrying the most Calories. 
That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

A) Find the top three Elves carrying the most Calories. 
B) How many Calories are those Elves carrying in total?

------------------------------------------------------------------------------------------------------------------------------------------------
*/
