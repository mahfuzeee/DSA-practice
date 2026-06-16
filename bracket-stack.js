//Bracket Matching Excercise
function isBalanced(input) {
  const stack = []; //Stack for storing brackets

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of input) {
    if (Object.values(pairs).includes(char)) {
      stack.push(char);
    } else if (pairs.hasOwnProperty(char)) {
      if (stack.pop() !== pairs[char]) {
        console.log("Brackets are not balanced.");

        return;
      }
    }
  }

  if (stack.length === 0) {
    console.log("Brackets are balanced.");
  }
}

isBalanced("[{()}]");
