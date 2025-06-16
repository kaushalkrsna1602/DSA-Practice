def maxProfit(prices):
    min = prices[0]
    maxProfit = 0

    for i in range(len(prices)):
        if prices[i] - min > maxProfit:
            maxProfit = prices[i] - min
        if prices[i] < min:
            min = prices[i]
    return maxProfit

print(maxProfit([7,1,5,3,6,4]))