# Approch 1 : Brute Force

def singleNumber(nums):
    hash = {}

    for num in nums:
        hash[num] = hash.get(num , 0) + 1
    for num in nums:
        if hash[num] == 1:
            return num
        


# Approach 2 XOR

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        xor = 0
        for num in nums:
            xor ^= num
        return xor