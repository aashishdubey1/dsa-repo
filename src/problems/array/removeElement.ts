// https://leetcode.com/problems/remove-element/description/

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

export function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    console.log({ i });
    if (nums[i] === val) {
      console.log("before", nums);
      nums.splice(i, 1);
      console.log("after", nums);
    }
  }
  return nums.length;
}
