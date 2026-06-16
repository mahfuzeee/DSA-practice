/*
Problem Statement
You are given an array of integers of size 
N
N. You have to color the elements of the array in a such way that no adjacent elements have the same color and value.

If two adjacent elements have different values then you can use the same color.
What is the minimum number of colors required.

Input
Input consists of two lines. First one having one integer 
N
N. Next line contains 
N
N integers.

Output
Print the minimum number of colors required to color the array.
*/

function main(input) {
  /**
   * Write JavaScript code from here
   */
  const lines = input.split("\n");
  const N = parseInt(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let colors = 1; // At least one color is needed
  let maxColors = 1; // To keep track of the maximum colors needed
  for (let i = 1; i < N; i++) {
    if (arr[i] === arr[i - 1]) {
      colors++;
    } else {
      colors = 1; // Reset colors for different value
    }
    maxColors = Math.max(maxColors, colors); // Update maximum colors needed
  }

  console.log(maxColors);
}

const input = `5
1 2 2 3 4`;
main(input);

const input2 = `6
1 1 1 1 1 1`;
main(input2);
