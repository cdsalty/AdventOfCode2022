import { readFileSync } from "fs";

const lines = readFileSync("testData.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

function letterToNumberConversion(letter) {
  if (/[a-z]/.test(letter)) {
    // lowercase
    console.log(letter);
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function partOne() {
  // Step 1: return the common letter that appears in both arrays. Only return one (new Set())
  lines.map((line) => {
    // [... ] // to convert each line into an it's own line item (turns it into a nested array)
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];
    // console.log(part1, part2);
    // [
    //   'v', 'J', 'r', 'w',
    //   'p', 'W', 't', 'w',
    //   'J', 'g', 'W', 'r'
    // ] [
    //   'h', 'c', 's', 'F',
    //   'M', 'M', 'f', 'F',
    //   'F', 'h', 'F', 'p'
    // ]
    let part1Set = new Set(part1); // Set(8) { 'v', 'J', 'r', 'w', 'p', 'W', 't', 'g' }
    const intersection = part2.filter((x) => part1Set.has(x));
    console.log({ intersection });
    const duplicatedIntersection = [...new Set(intersection)]; // removing dups and returning just one string

    console.log({ duplicatedIntersection });
    console.log(letterToNumberConversion("a"));
    console.log(letterToNumberConversion("z"));
    console.log(letterToNumberConversion("A"));
    console.log(letterToNumberConversion("Z"));

    // Step 2: Convert the letters to numbers based off the following requirements:
    // -  Lowercase item types a through z have priorities 1 through 26.  // a: 1
    // -  Uppercase item types A through Z have priorities 27 through 52. // A: 27
  });
}
partOne();

/* 
my scratch notes:
const learnFromSampleData = ["one", "two", "three", "four", "five", "six"];

let learnFromSlicExample = learnFromSampleData.slice(
  learnFromSampleData.length / 2
);
console.log(learnFromSampleData.length); // 6
console.log(learnFromSampleData.slice(5)); // "six"
console.log(learnFromSlicExample); // [ 'four', 'five', 'six' ]

*/
