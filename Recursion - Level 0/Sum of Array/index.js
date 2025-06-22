//Sum of all element in an Array..

let arr = [2,4,5,9,7,3,4]

console.log(arrSum(arr.length - 1))

function arrSum(n) {
    if (n == 0) return arr[0]
    return arr[n] + arrSum(n - 1)            // sum (n) = arr[n] + sum (n - 1)
}


