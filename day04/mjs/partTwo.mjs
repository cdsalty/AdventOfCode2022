import { readFileSync } from "node:fs";

const lines = readFileSync("realData.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

console.log(lines);
function part2() {
  const res = lines.map((line) => {
    const [first, second] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    const overlap = first[1] >= second[0] && second[1] >= first[0];

    return overlap ? 1 : 0;
  });
  console.log(res.reduce((a, b) => a + b, 0));
}

part2();
