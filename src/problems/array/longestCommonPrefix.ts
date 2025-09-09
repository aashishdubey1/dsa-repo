// https://leetcode.com/problems/longest-common-prefix/description/

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

export function longestCommonPrefix(str: string[]): string {
  for (let i = 0; i < str.length - 1; i++) {
    if (!str[i + 1].startsWith(str[i][0])) {
      return "g" + i;
    }
  }
  return "A";
}
