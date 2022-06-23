const { maxHeaderSize } = require("http");

console.log('Hello World')

let arr = [1,32,4,5,442,654,3,43,3232,7000];
function findFirstLargest() {
    let max = arr[0]
    for(let i = 1 ;i<arr.length;i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
// time complexity = O(n) traverse the array
// space complexity = O(1) need extra variable to store to 0the index element
console.log('Largest number is ', findFirstLargest());


function findTwoLargest() {
    let max1 = 0
    let max2 = 0
    for(let i = 0 ;i<arr.length;i++) {
        if (max1 < arr[i]) {
            max2 = max1
            max1 = arr[i]
        } else if (max2 < arr[i]) {
            max2 = arr[i]
        }
    }
    return [max1, max2]
}
console.log('Two Largest number are ', findTwoLargest())


function findThreeLargest() {
    let max1 = 0
    let max2 = 0
    let max3 = 0
    for(let i = 0 ;i<arr.length;i++) {
        if (max1 < arr[i]) {
            max3 = max2
            max2 = max1
            max1 = arr[i]
        } else if (max2 < arr[i]) {
            max3 = max2
            max2 = arr[i]
        } else if (max3 < arr[i]) {
            max3 = arr[i]
        }
    }
    return [max1, max2, max3];
}

console.log('Three Largest number are ', findThreeLargest())