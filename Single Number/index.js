// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Approach 1

var singleNumber = function(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] ++
        }
    }

    // console.log(hash)

    for (let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] == 1) {
            return nums[i]
        }
    }
};

console.log(singleNumber([1, 2 , 3, 2 , 3]))


// Approach 2 XOR

var singleNumber = function(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }

    return xor
};

