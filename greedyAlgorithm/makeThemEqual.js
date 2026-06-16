/*Problem Statement
You are given an array of integers of size N. 
In one operation you can either increase or decrease one element in the array by 1 unit. What is the minimum number of operations required to make all the elements of the array equal?

Input
Input consists of two lines. First one having one integer N. 
Next line contains N integers.

Output
Print the minimum number of operations required to make all the elements of the array equal.
*/

function main(input) {
  /**
   * Write JavaScript code from here
   *
   */
  const lines = input.split("\n");
  const N = parseInt(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  //Step-1: Sort the array
  arr.sort((a, b) => a - b);

  //Step-2: Find the median
  const median = arr[Math.floor(N / 2)];

  //Step-3: Calculate the total operations required to make all elements equal to the median
  let count = 0;
  for (const a of arr) {
    count += Math.abs(a - median);
  }
  console.log(count);
}

const input = `5
1 2 3 4 5`;
main(input);

const input2 = `4
1 2 3 4`;
main(input2);
