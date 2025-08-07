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
    

# Two Pointer Approach

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        i = 0
        j = len(s) - 1
        while i < j:
            if not s[i].isalnum():
                i += 1
            elif not s[j].isalnum():
                j -= 1
            elif s[i] == s[j]:
                i += 1
                j-= 1
            else :
                return False
        return True
        