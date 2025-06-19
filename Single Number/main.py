def singleNumber(nums):
    hash = {}

    for num in nums:
        hash[num] = hash.get(num , 0) + 1
    for num in nums:
        if hash[num] == 1:
            return num