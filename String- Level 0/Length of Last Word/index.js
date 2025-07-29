// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let n = s.length - 1
    while (n >= 0){
        if(s[n] === " ") {
            --n
        } else {
            break
        }
    }
    let count = 0;
    while (n >= 0) {
        if (s[n] !== " ") {
            --n
            ++count
        } else {
            break
        }
    }
    return count
};

function countLastWordLength(s) {
    let n = s.length - 1
    while(n >= 0) {
        if(s[n] !== " ") break
        --n
    }
    let count = 0
    while(n >= 0) {
        if(s[n] === " ") break
        --n;
        ++count
    }
    return count
}

console.log(countLastWordLength("   fly me   to   the moon  "))