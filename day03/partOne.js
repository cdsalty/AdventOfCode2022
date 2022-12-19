const fs = require("fs");

fs.readFile("inputData.txt", "utf-8", (error, data) => {
  const lines = data.trim().split("\n");

  function partOne() {
    lines.map((line) => {
      const part1 = [...line.slice(0, line.length / 2)]; // creating array from strings
      const part2 = [...line.slice(line.length / 2)];
      console.log({ part1, part2 });
      // [] Next step, need to find the items that appear in both compartments
      let partOneSet = new Set(part1);
      console.log(partOneSet); //  Set(8) { 'v', 'J', 'r', 'w', 'p', 'W', 't', 'g' }
      let intersection = part2.filter((x) => partOneSet.has(x));
      // [] check to see if the set from partOne has the "x" constent
    });
  }
  partOne();
});

/*
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, 

"that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged."

Each rucksack has two large compartments. 

All items of a given type are meant to go into exactly one of the two compartments. 

The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter

(***  a and A refer to different types of items   ****)

The list of items for each rucksack is given as characters all on a single line. 

A given rucksack always has the same number of items in each of its two compartments. 
The first half of the characters represent items in the first compartment. 
The second half of the characters represent items in the second compartment.


*/
