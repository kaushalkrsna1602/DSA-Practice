def reverseString(s):
    n = len(s)
    for i in range(int(n/2)):
        temp = s[i]
        s[i] = s[n -1-i]
        s[n -1-i] = temp
    return s

print(reverseString(["o", "k"]))


class Solution(object):
    def reverseString(self, s):
        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1