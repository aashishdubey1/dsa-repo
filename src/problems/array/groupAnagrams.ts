//Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

/**
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 */

export function groupAnagrams(strArr: string[]) {
  const res: Record<string, string[]> = {};
  let ansRes: string[][] = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length in res) continue;
    res[strArr[i].length] = [strArr[i]];
    for (let j = i + 1; j < strArr.length; j++) {
      if (strArr[i].length !== strArr[j].length) {
        continue;
      } else {
        res[strArr[i].length].push(strArr[j]);
      }
    }
  }
  for (const key in res) {
    ansRes = [...ansRes, [...res[key]]];
  }
  return ansRes;
}
