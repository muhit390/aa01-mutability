/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/

// Your code here
function oddRange(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}


console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;