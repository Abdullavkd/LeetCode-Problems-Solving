/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let arr = Array.from({length: n - 2}, ()=> new Array(n - 2))
   
    for(let i = 0; i < n - 2; i++) {
        for(let j = 0; j < n - 2; j++){
            let currentMax = 0;
            
            for(let row = i; row < i+3; row++) {
                for(let col = j; col < j+3; col++) {
                    if(currentMax < grid[row][col]) {
                        currentMax = grid[row][col]
                    }
                }
            }
            arr[i][j] = currentMax;
        }
    }
    return arr;
};