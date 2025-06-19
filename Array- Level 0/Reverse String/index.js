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

// console.log(reverseString(["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]



// second way
function reverseString2(s) {
    let left = 0; 
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp
        left++
        right--
    }
    return s
}

console.log(reverseString2(["h","e","l","l","o"]))