def removeDuplicates(nums):
    for i in range(len(nums)):
        x =0
        if nums[i] > nums[x]:
            nums[x] = nums[i]
            x += 1
    return x + 1

print(removeDuplicates([1, 1, 2]))  # Output: 2

