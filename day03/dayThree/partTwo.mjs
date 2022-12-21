import { readFileSync } from "fs";

const lines = readFileSync("inputData.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

function letterToNumberConversion(letter) {
  if (/[a-z]/.test(letter)) {
    //lowercase
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function partTwo() {
  let total = 0;
  for (let i = 0; i < lines.length; i += 3) {
    const backpacks = [[...lines[i]], [...lines[i + 1]], [...lines[i + 2]]];
    let backpackOne = backpacks[0];
    let backpackTwo = backpacks[1];
    let backpackThree = backpacks[2];
    let set = new Set(backpackOne);
    let intersection = backpackTwo.filter((x) => set.has(x));
    // console.log(intersection)
    set = new Set(intersection);
    // console.log(set)
    intersection = backpackThree.filter((x) => set.has(x));
    // console.log(intersection)
    const duplicatedIntersection = [...new Set(intersection)];
    // console.log(duplicatedIntersection);

    total += letterToNumberConversion(duplicatedIntersection[0]);
  }
  console.log(total);
}
/*
  for (let i = 0; i < lines.length; i += 3) {
    const backpacks = [[...lines[i]], [...lines[i + 1]], [...lines[i + 2]]];

    // 1. compare the values in the first set of backpack numbers to the second set of backpack numbers
    let set = new Set(backpacks[0]);
    // console.log(set);
    let intersection = [...backpacks[1]].filter((x) => set.has(x));
    // console.log(intersection);
    /*
    [
    'r', 's', 'F', 'M',
    'f', 'F', 'r', 'r',
    'F', 's'
    ]
    [ 'Q', 'c', 'T', 'Z', 'Z', 'T' ]
   
    // get the values from the intersected. call new Set (this is just for quicker)
    set = new Set(intersection);
    // console.log(set);
    
    Set(5) { 'r', 's', 'F', 'M', 'f' }
    Set(4) { 'Q', 'c', 'T', 'Z' }
    
    intersection = [...backpacks[2]].filter((x) => set.has(x));
    console.log(intersection);
    
      [ 'r' ]
      [ 'Z', 'Z' ]
      const duplicatedIntersection = new Set(intersection);
      console.log(duplicatedIntersection);
    }
  }
  */
partTwo();
/*

// get the first three lines
    // const backpacks = [...lines[i], ...lines[i + 1], ...lines[i + 2]]; // v w,
    // console.log(backpacks[0]);  // returns v, w
    const backpacks = [lines[i], lines[i + 1], lines[i + 2]];
    // console.log(backpacks1[0]); // returns vJrwpWtwJgWrhcsFMMfFFhFp, wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    let set = new Set(lines[i]);
    // filter the second backpack to see if it contains any letters from the set
    let intersection = lines[i + 1].filter((x) => set.has(x));
    console.log(intersection);
    set = new Set("First Intersection" + intersection);
    console.log({ intersection });
--- Part Two ---
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. 
  - Every Elf carries a badge that identifies their group. 
  - within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. 

*** All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached. ***

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

*/
