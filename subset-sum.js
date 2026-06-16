const nums = [3, 34, 4, 12, 8];
const N = nums.length;
const X = 9;

function subsetSum(i, currentSum) {
  //Base Case: If the current sum is equal to the target, we found a valid subset
  if (currentSum === X) return true;

  //Base Case: If we have considered all elements or the current sum exceeds the target, return false
  if (i >= N || currentSum > X) return false;

  //Take the current element and move to the next
  const take = subsetSum(i + 1, currentSum + nums[i]);

  //skip the current element and move to the next
  const skip = subsetSum(i + 1, currentSum);

  //Return true if either taking or skipping the current element leads to a valid subset
  return take || skip;
}

console.log(subsetSum(0, 0) ? "Yes" : "No");
