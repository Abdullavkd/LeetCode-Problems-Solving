/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let middleIndex = -1;
    let sumF = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i != 0) sumF+= nums[i-1]
        let sumB = 0;
        for(let j = i; j < nums.length; j++) {
            if(j != nums.length-1) sumB += nums[j+1]
        }
        if(sumF == sumB) {
            middleIndex = i;
            break;
        }
    }
    return middleIndex;
};