//This is a knapsack problem
//The goal is to find the maximum value of items that can be put in a knapsack of capacity C
//The items are represented by an array of weights and values
//The problem is to find the maximum value of items that can be put in a knapsack of capacity C

//The problem is a classic dynamic programming problem
//The solution is to use a 2D array to store the maximum value of items that can be put in a knapsack of capacity C
//The solution is to use a 2D array to store the maximum value of items that can be put in a knapsack of capacity C

//Problem statement
/* You are given N items. Every item has a weight and a value. You are also given an integer W. You have to choose some items from the given items so that their total weights do not exceed W and the sum of their values is maximum. 
Input
The input consists of N+1 lines. First one having two integers N and W. Then the next N lines will have two integers 
wiand vi,the weight and value of the ith item .*/

function knapsack(input) {
  const lines = input.split("\n");

  const N = parseInt(lines[0].split(" ")[0]);
  const W = parseInt(lines[0].split(" ")[1]);

  //step 1: create an array of items (weight and value)
  const items = [];
  for (let i = 1; i <= N; i++) {
    const [weight, value] = lines[i].split(" ").map(Number);
    items.push({ weight, value });
  }

  //step 2: create a 2D array to store the maximum value of items that can be put in a knapsack of capacity C
  const dp = new Array(N + 1).fill(0).map(() => new Array(W + 1).fill(0));

  //step 3: fill the 2D array
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= W; j++) {
      if (items[i - 1].weight <= j) {
        dp[i][j] = Math.max(
          items[i - 1].value + dp[i - 1][j - items[i - 1].weight],
          dp[i - 1][j],
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //step 4: print the maximum value of items that can be put in a knapsack of capacity C
  console.log(dp[N][W]);
}

const input = `4 5
1 2
2 4
3 5
4 6`;
knapsack(input);
