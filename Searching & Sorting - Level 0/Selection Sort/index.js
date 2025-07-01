// Selection Sort

let a = [4, 5 , 8 , 9 , 45, 12, 13]

function selectionSOrt(a){
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        // find the minimum
        let min = i
        for (let j = i+1; j < n; j++) {
            if(a[j] < a[min]) {
                min = j
            }
        }

        if (min != i) {
            let temp = a[i]
            a[i] = a[min]
            a[min = temp]
        }
    }
    return a
}

let result = selectionSOrt(a)

console.log(result)