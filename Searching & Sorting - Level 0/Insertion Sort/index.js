 let arr = [4,5,1,3,9]

function insertionSort(a) {
    let n = a.length;
    for(let i = 1; i < n; i++) {
        let curr = a[i]
        let prev = i - 1;

        while(a[prev] > curr && prev >= 0){
            a[prev + 1] = a[prev];
            prev--
        }

        a[prev + 1] = curr;
    }
    return a
}

console.log(insertionSort(arr))