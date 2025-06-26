# Linear Search
arr = [12, 34, 456,78, 1, 4, 5, 6]
def linearSearch(arr , target):
    for i in range(len(arr)):
        if arr[i] == target: return i
    return -1

print(linearSearch(arr , 12))