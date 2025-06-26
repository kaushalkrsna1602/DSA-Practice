// Linear Search



let arr = [2, 4, 6, 7, 9, 12, 34]

function linearSearch(arr , target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)  return i
    } 
    return -1
}

console.log(linearSearch(arr, 12))
