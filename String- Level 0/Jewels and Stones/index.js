// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            ++count
        }
    }
    return count
};

// Using Two Loops

var numJewelsInStones2 = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for(let j = 0; j < jewels.length; j++) {
            if(jewels[j] === stones[i]) {
                ++count
                break;
            }
        }
    }
    return count
};

// Hashing

var numJewelsInStones3 = function(jewels, stones) {
    let jSet = new Set();
    for (let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i])
    }

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if(jSet.has(stones[i])) {
            ++count
        }
    }
    return count
};

console.log(numJewelsInStones3("aA", "aAAbbbb"))