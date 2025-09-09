// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order

// export function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums.length - 1; j > i; j--) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return [];
// }

// optimized approach

export function twoSum(num: number[], target: number) {
  const map = new Map<number, number>();

  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(num[i], i);
    }
  }
  return [];
}
