/*
function findTriplet(arr, target) {
   let n = arr.length;
   arr.sort((a , b) => a -b);
   for(let i = 0; i < n - 2; i++) {
      for(let j = i+1; j < n-1; j++) {
         for(let k = j + 1; k < n; k++) {
            if(arr[i] + arr[j] + arr[k] == target) {
               console.log([arr[i], arr[j], arr[k]]);
               return;
            }
         }
      }
   }
}
*/


function findTriplet(arr, target) {
   let n = arr.length;
   arr.sort((a , b) => a -b);
   for(let i = 0; i < n - 2; i++) {

      let left = i + 1, right = n -1;

      let requiredSum = target - arr[i];
      
      while(left < right) {
         if((arr[left] + arr[right]) == requiredSum) {
            console.log([arr[i], arr[left], arr[right]]);
            return;
         } else if((arr[left] + arr[right]) < requiredSum) {
            left++;
         } else if((arr[left] + arr[right]) > requiredSum) {
            right--;
         }
      }
            
   }
}

findTriplet([7, 2, 3, 0, 1], 12);