/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // Check if current element is greater than the next (circularly)
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
  }

  // A sorted rotated array can have at most one such "drop"
  return count <= 1;
};