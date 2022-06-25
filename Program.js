const { maxHeaderSize } = require("http");

console.log('Hello World')

// let arr = [1,32,4,5,442,654,3,43,3232,7000];
let arr = [64,25,12,22,11]
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
function swap(x,y) {
    var temp = arr[x];
    arr[x] = arr[y]
    arr[y] = temp
}

function selectionSort() {
    for (let i = 0 ; i < arr.length - 1; i++) {

        let maxSwapIndex = i
        let minVal = arr[i]

        for (let k = i + 1 ; k < arr.length; k++) {
            console.log('Check if ',minVal,">",arr[k])
            if (minVal > arr[k]) {
                minVal = arr[k];
                maxSwapIndex = k;
                console.log("----YES-----")
            } else {
                console.log("N---------O")
            }
        }
        console.log('swap val with val',arr[i], arr[maxSwapIndex] )
        swap(i,maxSwapIndex);
    }
    return arr
}
console.log('SelectionSort Result ', selectionSort())

//Bubble Sort
arr = [5, 1, 4, 2, 8]
function BubbleSort() {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log('======================')
            console.log(arr[i],'<',arr[j])
            if(arr[i]>arr[j]) {
                console.log('swap')
                let element = arr[i];
                arr[i] = arr[j];
                arr[j] = element;
            }
        }
    }
    return arr
}
console.log('BubbleSort Result ',BubbleSort())
