/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let stable = false;
    let arr = [];
    for(let i = 0; i < height.length; i++) {
        if(stable) arr.push(i)
        if(height[i] > threshold) {
            stable = true
        }else{
            stable = false
        }
    }
    return arr;
};