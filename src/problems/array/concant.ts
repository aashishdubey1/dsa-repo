// https://leetcode.com/problems/concatenation-of-array/description/
// 1929. Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

export function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}

export function getConcatenation2(nums: number[]): number[] {
  const ans_arry: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans_arry[i] = nums[i];
    ans_arry[i + nums.length] = nums[i];
  }
  return ans_arry;
}
