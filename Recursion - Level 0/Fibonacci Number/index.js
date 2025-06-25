// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Iterative Approach...

function fibo(n) {
    let result = [0, 1]
    for (let i = 2 ; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    console.log(result)
}

// fibo(5)                      // Prints array of fibonacci number till n

// Approach 2

function fibo2(n) {
    if ( n == 0) return 0;
    if ( n == 1) return 1;

    // Initialize variables for F(i-2) and F(i-1)
    let a = 0; 
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const nextFib = a + b
        a = b
        b = nextFib;
    }

    console.log(b)
}

// fibo2(5)



