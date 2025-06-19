var isPalindrome = function(x) {
    if(x < 0) return false

    let xC = x

    let rev = 0;
    while(x > 0) {
        rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x /10)
    }
    // if(rev === xC) {
    //     return true
    // } else {
    //     return false
    // }

    return xC === rev
};