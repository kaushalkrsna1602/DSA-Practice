# Sum of all numbers in an List

list = [2,4,5,9,7,3,4]

def sum(n):
    if n == 0: return list[0]
    return list[n] + sum(n - 1)

# print(sum(len(list) - 1))

# Sum of all odd Numbers in an Array

def oddSum(n):
    isOdd = (list[n] % 2) != 0
    if n == 0:
        return list[0] if isOdd else 0 
    return (list[n] if isOdd else 0) + oddSum(n - 1)

print(oddSum(len(list) - 1))