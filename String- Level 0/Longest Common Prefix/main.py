# 14
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        x = 0
        while x < len(strs[0]):
            ch = strs[0][x]
            for i in range(1, len(strs)):
                if x == len(strs[i]) or strs[i][x] != ch:
                    return strs[0][:x]  # substring up to x
            x += 1
        return strs[0]
