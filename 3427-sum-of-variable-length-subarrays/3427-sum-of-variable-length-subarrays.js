/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        let start;
        if(0 > i-nums[i]) start = 0;
        else start = i-nums[i];
        for(let j = start; j <= i; j++) {
            sum+=nums[j]
        }
    }
    return sum;
};