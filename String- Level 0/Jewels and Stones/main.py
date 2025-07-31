class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jSet = set()
        for i in range(len(jewels)):
            jSet.add(jewels[i])
        count = 0
        for i in range(len(stones)):
            if stones[i] in jSet:
                count += 1
        return count
        


class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        jset = set(jewels)
        return sum(1 for c in stones if c in jset)