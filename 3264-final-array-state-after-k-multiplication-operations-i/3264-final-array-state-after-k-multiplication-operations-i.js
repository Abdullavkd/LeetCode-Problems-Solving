/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i = 0; i < k; i++) {
        let index = 0;
        let temp = nums[0];
        for(let j = 0; j < nums.length; j++) {
            if(temp > nums[j]) {
                temp = nums[j]
                index = j
            }
        }
        nums[index] = nums[index] * multiplier;
    }
    return nums;
};