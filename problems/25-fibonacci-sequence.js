/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

// Your code here
function fibonacciSequence(num) {
    let newArr = [];
    let num1 = 0;
    let num2 = 1;
    let temp;
    for (let i = 0; i < num; i++) {
        newArr.push(num2);
        temp = num1 + num2;
        num1 = num2;
        num2 = temp


    }

    return newArr;
}



console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(0)); // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;