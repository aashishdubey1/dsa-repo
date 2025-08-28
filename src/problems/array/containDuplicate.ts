// https://leetcode.com/problems/contains-duplicate/description/
// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// time O(n) space O(n)  -> fast but no early exist
export function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  console.log(set);
  return set.size != nums.length;
}

// not go good , doint nested linear search time - O(n2) - slow
export function containDuplicate2(nums: number[]): boolean {
  const newArr: number[] = [];
  for (const el of nums) {
    if (newArr.includes(el)) return true;
    newArr.push(el);
  }
  return false;
}

export function containDuplicate3(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const el of nums) {
    if (seen.has(el)) return true;
    seen.add(el);
  }
  return false;
}
