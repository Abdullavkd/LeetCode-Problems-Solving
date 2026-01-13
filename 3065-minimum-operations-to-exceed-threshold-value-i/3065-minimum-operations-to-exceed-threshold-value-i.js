/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let n = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < k) {
            n++;
        }
    }
    return n;

};