// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    let n = s.length;
    for(let i = 0; i < n /2; i++) {
        let temp = s[i];
        s[i] = s[n -1 - i];
        s[n -1- i] = temp;
    }
    return s;
}

console.log(reverseString(["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]