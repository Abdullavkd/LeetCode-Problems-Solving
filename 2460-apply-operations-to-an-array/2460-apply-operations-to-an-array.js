/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]) {
            nums[i]*=2;
            nums[i+1] = 0;
        }
    }
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0)
            i--
            k++
        }
        if(k > nums.length) break;
    }
    
    return nums;
};