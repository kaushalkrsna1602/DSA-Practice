class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        i = 0
        n = 1
        k2 = k
        m = []
        
        while k2 > 0:
            # If we still have elements left in arr and n matches arr[i]
            if i < len(arr) and arr[i] == n:
                i += 1
            else:
                m.append(n)
                k2 -= 1
            n += 1
        
        return m[k - 1]
