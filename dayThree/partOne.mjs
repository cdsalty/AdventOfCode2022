import { readFileSync } from "fs";

// Code with thought process below code.
const lines = readFileSync("inputData.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

function letterToNumberConversion(letter) {
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}
function partOne() {
  const results = lines.map((line) => {
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];

    let part1Set = new Set(part1);
    const intersection = part2.filter((x) => part1Set.has(x));
    const duplicatedIntersection = [...new Set(intersection)]; // removing dups and returning just one string

    // console.log(letterToNumberConversion(duplicatedIntersection[0]));
    return letterToNumberConversion(duplicatedIntersection[0]);
  });
  console.log(results.reduce((a, b) => a + b, 0));
}
partOne();

/*
const lines = readFileSync("testData.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");
// The charCodeAt() method returns a number indicating the Unicode value of the character at the given index. The last character has an index equal to length of the specified string minus one.
function letterToNumberConversion(letter) {
  // test is a regex method that returns true or false
  if (/[a-z]/.test(letter)) {
    // test and return lowercase
    // console.log(letter.charCodeAt(0) - 96);
    return letter.charCodeAt(0) - 96;
  } else {
    // it has to be upperCase
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function partOne() {
  // Step 1: return the common letter that appears in both arrays. Only return one (new Set())
  let results = lines.map((line) => {
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
    // Step 2: call new Set method to remove the duplicates
    let part1Set = new Set(part1);
    // Step 3: check if any of the elements in part2 contain any of the elements in part1Set? Return the ones that do.
    // NOTE: the .has method returns true or false... & the filter method returns the elements from the given array that pass the test. So the truthy conditions
    const intersection = part2.filter((x) => part1Set.has(x));
    // console.log({ intersection });
    // Now, I need to call set on the intersection
    const duplicatedIntersection = [...new Set(intersection)]; // removing dups and returning just one string
    // console.log({ duplicatedIntersection });

    // Step 4: Convert the letters to numbers based off the following requirements:
    // -  Lowercase item types a through z have priorities 1 through 26.  // a: 1
    // -  Uppercase item types A through Z have priorities 27 through 52. // A: 27
    // console.log(letterToNumberConversion(duplicatedIntersection[0]));
    return letterToNumberConversion(duplicatedIntersection[0]);

    // console.log(
    //   letterToNumberConversion("a"),
    //   letterToNumberConversion("z"),
    //   letterToNumberConversion("A"),
    //   letterToNumberConversion("Z")
    // );
  });
  console.log(results());
}
partOne();


my scratch notes:
const learnFromSampleData = ["one", "two", "three", "four", "five", "six"];

let learnFromSlicExample = learnFromSampleData.slice(
  learnFromSampleData.length / 2
);
console.log(learnFromSampleData.length); // 6
console.log(learnFromSampleData.slice(5)); // "six"
console.log(learnFromSlicExample); // [ 'four', 'five', 'six' ]

*/
