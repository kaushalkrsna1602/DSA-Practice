# Approach 1

nums1 = [2, 5, 6]
nums2 = [3, 7, 9]
m = len(nums1)
n = len(nums2)

def merge_array1(nums1, m, nums2, n):
    nums1 = nums1 + nums2
    nums1.sort()
    print(nums1)

merge_array1(nums1 , nums2 , m , n)


# Approach 2 
class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        p1 = m - 1
        p2 = n - 1
        p  = m + n - 1

        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1

        # If there are remaining elements in nums2, copy them
        while p2 >= 0:
            nums1[p] = nums2[p2]
            p2 -= 1
            p -= 1


# Approach 3

def merge(nums1, m, nums2, n):
    p1 = m - 1
    p2 = n - 1

    for i in range(m + n - 1, -1, -1):
        if p2 < 0:
            break
        
        if p1 >= 0 and nums1[p1] > nums2[p2]:
            nums1[i] = nums1[p1]
            p1 -= 1
        else:
            nums1[i] = nums2[p2]
            p2 -= 1