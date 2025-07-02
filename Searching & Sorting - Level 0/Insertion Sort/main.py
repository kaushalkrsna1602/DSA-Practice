arr = [4,5,1,3,9]

def insertionSort(a):
    n = len(a)
    for i in range(1 , n):
        curr = a[i]
        prev = i - 1
        while(a[prev] > curr and prev >= 0):
            a[prev + 1] = a[prev]
            prev -= 1
        a[prev + 1] = curr
    return a

print(insertionSort(arr))