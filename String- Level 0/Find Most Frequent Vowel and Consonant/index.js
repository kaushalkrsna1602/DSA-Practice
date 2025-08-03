// 3541. Find Most Frequent Vowel and Consonant

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = {}
    for (i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            ++map[s[i]]
        }
    }

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0
    let maxConsonant = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (map[s[i]] > maxVowels) {
                maxVowels = map[s[i]]
            }
        }
        else {
            if (map[s[i]] > maxConsonant) {
                maxConsonant = map[s[i]]
            }
        }
    }
    return maxConsonant + maxVowels
};        