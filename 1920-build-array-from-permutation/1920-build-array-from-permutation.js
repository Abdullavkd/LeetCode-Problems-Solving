/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // return nums.map((val, index) => {
    //     let ans = [];
    //     return ans[index] = nums[nums[index]]
    // })

    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]]
    }
    return ans;
};