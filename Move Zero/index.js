// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i]
            x++
        }
    }

    for(let i =x; i < nums.length; i++) {
        nums[i] = 0
    }
};