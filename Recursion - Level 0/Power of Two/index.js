// iven an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

function powerOfTwo(n) {
    if (n == 1 ) return true
    else if (n < 1 || n % 2 != 0) return false
    return powerOfTwo(n / 2)
}