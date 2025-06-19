// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Approach1

let nums1 = [2, 5, 6]
let nums2 = [3, 7, 9]

let m = nums1.length;
let n = nums2.length

function mergeArray1(nums1 , m , nums2 , n) {
    nums1 = [...nums1 , ...nums2]
    console.log(nums1.sort((a , b) => a - b))
}

mergeArray1(nums1 , m , nums2 , n)

// Approach2
function mergeSortedArray(nums1 , m , nums2, n) {
    let nums3 = nums1.slice(0,m)
    let p1 = 0;
    let p2 = 0;

    for(let i =0; i < m+n; i++) {
        if( p2 >= n || (p1 < m && nums3[p1] < nums2[p2])) {
            nums1[i] = nums3[p1]
            p1++
        }
        else {
            nums1[i] = nums2[p2]
            p2++
        }
    }
}


// Approach 3

 var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i =  m + n - 1; i >=0; i--) {
        if (p2 < 0) break;

        if (p1 >=0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1]
            p1--
        } else {
            nums1[i] = nums2[p2];
            p2--
        }
    }
};