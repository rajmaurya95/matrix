var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
  
    // create a 2D array to store the maximum number of moves
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  
    // initialze the dp array with 1 for each cell since you can always move to the same cell
    for (let i = 0; i < m; i++) {
      dp[i][0] = 1;
    }
  
    let maxMoves = 0;
  
    // iterate matrix through the columns from left to right
    for (let col = 1; col < n; col++) {
      for (let row = 0; row < m; row++) {
        // for each cell consider the three possible moves
        for (let dr = -1; dr <= 1; dr++) {
          const newRow = row + dr;  //as a new arrary
          if (newRow >= 0 && newRow < m && grid[newRow][col] > grid[row][col - 1]) {
            dp[row][col] = Math.max(dp[row][col], dp[newRow][col - 1] + 1);
          }
        }
  
        // Update the maximum moves if you have need to update
        maxMoves = Math.max(maxMoves, dp[row][col]);
        console.log(dp); //show your arrays 
      }
    }
  
    return maxMoves;
  };
  
  // Example 1
  const grid1 = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
  console.log(maxMoves(grid1)); 
  
  // Example 2
  const grid2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]];
  console.log(maxMoves(grid2)); 
  