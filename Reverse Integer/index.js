var reverse = function(x) {
    let xC = x;
    x = Math.abs(x)

    let rev = 0;
    while (x > 0) {
        last = x % 10;
        rev = (10 * rev) + last
        x = Math.floor(x/10)
    }

    let limit = Math.pow(2 , 31);   // test cases calculate power

    if(rev < -limit || rev > limit) return 0
    
    return (xC < 0) ? -rev : rev
};