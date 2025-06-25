def fibo(n):
    if n <= 1: return n
    a = 0
    b = 1
    for _ in range(2, n+1):
        next_fib = 1 + b
        a = b
        b = next_fib
    print(b)

fibo(5)
