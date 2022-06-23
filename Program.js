const { maxHeaderSize } = require("http");

console.log('Hello World')

let arr = [1,32,4,5,442,654,3,43,3232];
function findLargest() {
    let max = arr[0]
    for(let i = 0 ;i<arr.length;i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
console.log('Largest number is ', findLargest())