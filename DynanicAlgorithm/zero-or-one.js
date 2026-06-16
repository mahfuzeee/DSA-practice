/*Problem statement: 
A number from 0 to 9 will be presented as a word in lower case english letter. For example, three. The program will take it as input. Print 0 if the remainder is 0 while the number is divided by 2, otherwise, print 1 if the remainder is 1.
Input
The program will take a string S as input.
Output
The output will print either 0 0r 1.
*/

function main(input) {
  //Declare char to number object
  const wordToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  //Find the number for the given input
  const num = wordToNum[input.trim().toLowerCase()];
  console.log(num % 2);
}

main("Six");
