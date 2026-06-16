/*Problem Statement
You are given 
N activities with their start and finish times. Find the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.

Input
Input consists of 
N+1 lines. First one having one integer N. Next 
N lines contain two integers 
S,E each, the start and end time.

Output
Print the maximum number of activities that can be performed by a single person.
*/

/*
function activitySelection(arr) {
  arr.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      count++;
      end = arr[i][1];
    }
  }
  console.log(count);
}

const activities = [
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9],
];
activitySelection(activities);
*/

function main(input) {
  /**
   * Write JavaScript code from here
   */
  const lines = input.split("\n");
  const N = parseInt(lines[0]);
  let acts = [];

  //Push start and end data as object in acts array
  for (let i = 1; i <= N; i++) {
    let [s, e] = lines[i].split(" ").map(Number); // [1 5]
    acts.push({ start: s, end: e });
  }

  //Step-1: Sort according to end
  acts.sort((a, b) => {
    if (a.end === b.end) {
      return a.start - b.start;
    }
    return a.end - b.end;
  });

  let count = 0;
  let lastEnd = 0;

  //Select activities
  for (const act of acts) {
    if (act.start >= lastEnd) {
      count++;
      lastEnd = act.end;
    }
  }

  console.log(count);
}

const input = `6
1 2
3 4
0 6
5 7
8 9
5 9`;

main(input);
