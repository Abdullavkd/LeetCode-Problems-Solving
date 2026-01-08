/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    arr = [];
    for(let i = 0; i < nums.length; i++) {
        nums[i] % 2 == 0 ? arr.unshift(0) : arr.push(1);
    }
    return arr;
};