arr = [4,5,1,3,9]

def binarySort(arr):
    n = len(arr)
    for i in range(n - 1):
        isSwapped = False
        for j in range (n - 1 - i):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j+ 1]
                arr[j + 1] = temp
                isSwapped = True
        if not isSwapped : break
    return arr

print(binarySort(arr))


# swapping approach 2

def binarySort2(arr):
    n = len(arr)
    for i in range(n - 1):
        isSwapped = False
        for j in range (n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                isSwapped = True
        if not isSwapped : break
    return arr


print(binarySort2(arr))