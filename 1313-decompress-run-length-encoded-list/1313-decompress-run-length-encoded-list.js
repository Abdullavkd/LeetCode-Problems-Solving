/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = 0; j < nums[i]; j++) {
    //         arr.push(nums[i+1])
    //     }
    //     i++
    // }

    let i = 0;
    while(i < nums.length){
        for(let j = 0; j < nums[i]; j++) {
            arr.push(nums[i+1])
        }
        i+=2
    }
    return arr;
};