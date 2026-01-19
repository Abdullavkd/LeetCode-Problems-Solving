/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        let test = 0;
        for(let j = 0; j < i; j++) {
            if(nums[i] == nums[j]) {
                test ++;
                if(test > 0) break;
            }
        }
        if(test < 1) arr.push(nums[i]);
    }
    for(let i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
    return arr.length;
};