const nums = [6, 34, 4, 12, 8];
const N = nums.length;
const X = 9;

function expressionSum(i, currentSum) {
  //Base Case: If the current sum is equal to the target, we found a valid subset
  if (currentSum === X) return true;

  //Base Case: If we have considered all elements or the current sum exceeds the target, return false
  if (i >= N) return false;

  //add the current element and move to the next
  const add = expressionSum(i + 1, currentSum + nums[i]);

  //subtract the current element and move to the next
  const subtract = expressionSum(i + 1, currentSum - nums[i]);

  //skip the current element and move to the next
  const skip = expressionSum(i + 1, currentSum);

  //Return true if either taking or skipping the current element leads to a valid subset
  return add || subtract || skip;
}

console.log(expressionSum(0, 0) ? "Yes" : "No");
