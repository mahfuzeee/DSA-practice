function findTriSum(input) {
    const data = input.split(/\s+/).map(Number);
    const arr = data.slice(1);
    const n = data[0];
    //console.log(data);
    console.log(n);

    
    arr.sort((a, b) => a -b); //sort array descending
    let count = 0;
    console.log(arr);
    
    for(let i=0; i < n-2; i++) {
        let left = i + 1;
        let right = n - 1;

        while(left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if(sum === 0) {
                count++;
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else if(sum > 0) {
                right--;
            }
        }
    }
    console.log(count);
}

findTriSum(`50
32 -12 -39 23 -37 49 21 33 -62 3 -21 65 25 12 38 -63 52 -87 -88 59 -69 -6 -89 -35 77 -97 -82 -59 56 -71 10 -86 67 -51 22 -83 8 29 87 86 6 -70 7 -29 72 58 -3 30 -77 48`);