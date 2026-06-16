/* Problem Statement
Write a JavaScript program to create a function that counts how many lone 0s appear in a given number. Lone means the number doesn't appear twice or more in a row. The previous and next numbers are not zero. For example - countLoneZeroes(10101) ➞ 2
Input
The program will take an integer N as input
Output
The output will print the number of lone 0's in the integer.
*/

function countLoneZeroes(input) {
  const str = input.toString();
  const num = str.split("");
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0" && num[i - 1] !== "0" && num[i + 1] !== "0") {
      count++;
    }
  }
  return count;
}

console.log(countLoneZeroes(1010101));
