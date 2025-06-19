let n = 6789754

function countDigit(n) {
    if(n ==0) return 1;   //corner cases if digit is 0

    n = Math.abs(n)    // absolute changes negative to positive
    let count = 0;
    while(n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count
}

console.log(countDigit(n))