// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// ASCII Character 

var isPalindrome = function (s) {
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
    if (
    (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
    (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
    ) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
    }
}
return filteredString === rev;
};

// Regex


var isPalindrome = function (s) {
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
    if(s[i].match(/[a-z0-9]/i)) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
    }
}
return filteredString === rev;
};