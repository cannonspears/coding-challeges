/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Method: O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
