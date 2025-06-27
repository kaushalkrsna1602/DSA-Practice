def binarySearch(nums  , target):
    left = 0
    right = len(nums) - 1

    while right >= left:
        middle = int((left + right) / 2)

        if target == nums[middle] :
            return middle
        elif target < nums[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return - 1


