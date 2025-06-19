// ***
// ***
// ***
let n = 4

for(let i = 0; i < n; i++) {
    let row = ""
    for(let j = 0; j < n; j++) {
        row = row +  "*"
    }
    console.log(row)
}


// *
// **
// ***
// ****
// *****

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < i + 1; j++) {
        row += "*"
    }
    console.log(row)
}

// 1
// 12
// 123
// 1234
// 12345

for(let i =0; i < n; i++) {
    row = ""
    for (let j = 0; j < i + 1; j++) {
        row += j + 1
    }
    console.log(row)
}

// 1
// 22
// 333
// 4444

for(let i = 0; i < n; i++) {
    let row = ""
    for(let j = 0; j <= i; j++){
        row += i + 1
    }
    console.log(row)
}

// 1234
// 123
// 12
// 1 

for(let i = 0; i < n; i++) {
    let row = ""
    for(let j = 0; j < n - i; j++) {
        row += j + 1
    }
    console.log(row)
}

//    *
//   **
//  ***
// ****

for(let i = 0 ; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - (i + 1); j++) {
        row += " "
    }
    for(let k = 0; k < i + 1; k++) {
        row += "*"
    }
    console.log(row)
}