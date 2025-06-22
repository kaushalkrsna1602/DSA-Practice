# Sum of all numbers in an List

list = [2,4,5,9,7,3,4]

def sum(n):
    if n == 0: return list[0]
    return list[n] + sum(n - 1)

print(sum(len(list) - 1))