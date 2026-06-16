//Findinng Smallest number
function findSmallest(arr) {
  return arr.reduce((acc, curr) => (curr < acc ? curr : acc));
}

console.log(findSmallest([4, 2, 8, 1, 9]));

//Merging arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1,2], [3,4]));
