def removeElement(nums , val) :
    x = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[x] = nums[i]
            x += 1
    return x

print(removeElement([3, 2, 2, 3], 3))  # Output: 2