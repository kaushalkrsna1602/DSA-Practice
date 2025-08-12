// 14
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(arr) {
    if (!arr.length) return "";
    let x = 0;
    while (x < arr[0].length) {
        let ch = arr[0][x];
        for (let i = 0; i < arr.length; i++) {
            if (x == arr[i].length || ch !== arr[i][x]) {
                return arr[0].substring(0, x);
            }
        }
        x++;
    }
    return arr[0];
}

let arr = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr)); // "fl"
