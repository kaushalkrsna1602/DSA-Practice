// Merge Sort : Divide & Conquer Algorithm

let arr = [5,2,8,9,45,65,78,54,1,2,3]

function mergeArr(arr1 , arr2) {
    let res = []
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else{
            res.push(arr2[j])
            j++
        }
    }

    return [...res , ...arr1.slice(i), ...arr2.slice(j)]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArr(left, right)
}

console.log(mergeSort(arr))