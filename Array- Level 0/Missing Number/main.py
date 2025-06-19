def missingNum(nums):
    n = len(nums)
    totalSum = n * (n + 1) / 2
    sum = 0
    for i in range(n):
        sum += nums[i]
    return totalSum - sum

print(missingNum([0,1]))