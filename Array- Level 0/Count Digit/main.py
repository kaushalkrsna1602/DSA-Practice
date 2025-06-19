n = int(input("Enter a Number: "))

def countDigit(n):
    if(n == 0):
        return 1
    n = abs(n)
    count = 0
    while n > 0:
        n //= 10
        count += 1
    return count

result = countDigit(n)
print(result)
