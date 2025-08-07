class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        filterStr = ""
        rev = ""
        for c in s:
            if c.isalnum():
                filterStr = filterStr + c
                rev = c + rev
        return rev == filterStr