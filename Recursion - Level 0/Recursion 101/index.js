function fun(num) {

    if (num == 0) return    // Base case

    // Recursive case
    console.log(num)
    num--
    fun(num)
}


// print n to 1 using recursion

function count(num) {
    if (num < 1) return 

    console.log(num)
    num--
    count(num)
}

// count(10)


// print 1 to n using recursion
let n = 10
 
function print(x) {
    if (x > n) return
    console.log(x)
    print(++x)
}

print(1)