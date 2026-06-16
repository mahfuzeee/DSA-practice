function countPath(grid, N, M) {
  function goToCell(i, j) {
    //Base Case: If the starting cell is blocked, return 0
    if (grid[0][0] === 1) return 0;

    //Base Case: If we have reached the destination cell, return 1
    if (i === N - 1 && j === M - 1) return 1;

    //Base Case: If we have gone out of bounds or hit a blocked cell, return 0
    if (i >= N || j >= M || grid[i][j] === 1) return 0;

    //Move right and down recursively
    const right = goToCell(i, j + 1);
    const down = goToCell(i + 1, j);

    //Return the total paths from the current cell to the destination
    return right + down;
  }
  return goToCell(0, 0);
}

console.log(
  countPath(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    3,
    3,
  ),
);
