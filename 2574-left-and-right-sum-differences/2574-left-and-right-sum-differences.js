/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = [0];
    let rightSum = [0];
    let answer = [];
    let sumLeft = 0;
    let sumRight = 0;

    for(let i = 0; i < nums.length-1; i++) {
        sumLeft+=nums[i];
        leftSum.push(sumLeft);
    }
    for(let i = nums.length-1; i > 0; i--) {
        sumRight+=nums[i];
        rightSum.unshift(sumRight);
    }
    for(let i = 0; i < nums.length; i++) {
        if(leftSum[i] > rightSum[i]){
            answer[i] = leftSum[i] - rightSum[i];
        }else{
            answer[i] = rightSum[i] - leftSum[i];
        }
        
    }
    return answer;
};