# JavaScriptBasics
# JavaScript Data Types
Primitive type
- null - has only one value null.
- undefined - when a variable is declared but not initialized, it is assigned the value of undefined.
```javascript
console.log(null == undefined); // true
```
- boolean - type has two literal values: true and false in lowercase
- number - represent both integer and floating-point numbers
- string - A string literal begins and ends with either a single quote(') or a double quote (").

Object type
- object is a collection of properties, where each property is defined as a key-value pair.
```javascript
const person = {
    name: 'Gurjinder Singh',
    age: 24,
}
```
# Variable,let and Constants keywords
// Earlier, pre ES6 era, only var keyword was inroduced for dec of variable

// with ES6, the let and const keyword introduced
```javascript
// Withou keyword it is same as var 
  name = 'Gurjidner Singh'  
// Using var
  var name = 'Gurjidner Singh'  
// Using var
  let name = 'Gurjidner Singh'  
// Using const
  const uName = 'Gurjidner Singh'

  const age = 24
  let isHasHobby = true
  isHasHobby = false

  // Normal Function
  function userData(name, age, isHasHobby){
    return ('Name is -> ' + name + 'Age is -> ' + age + 'Hobby ->' + isHasHobby)
  }
  // Arrow function
  const userData1 = (name, age, isHasHobby) => {
    return 'Name is -> ' + name + 'Age is -> ' + age + 'Hobby ->' + isHasHobby
  }

  console.log(userData(uName,age,isHasHobby));
  console.log(userData1(uName,age,isHasHobby));
//The Variable may exist in a block, inside func or outside func.

//A block is a section of code inside {}
{
    let name = 'Gurjinder Singh';
}
//It has block scope. 

//Function is a declared using function keyword.
function test() {
    let name = 'Gurjinder Singh';
}
//It has function scope.
/*
Everythind declared outside block and function is global scope.

So, there are 3 type of scope.
1. Block scope
2. Function scope
3. Global scope

The three keywords let, var and const work around these scopes.*/
```
# Object property and Method
```javascript
//How to creat object
const person = {
    uName: 'Gurjinder Singh',
    age: 24,
    getName() {
      console.log('My Name is ->' + uName)
    }
}
//This is the simple and most popular way
console.log(person);
person.getName()

//You can also use Object keyword to create object
const person = new Object();
person.name = 'Gurjinder Singh';

//You can also use 'new' with user defined constructor function
function Person(name) {
    this.name = name;
}
//Now anytime you want person object
cosnt person = new Person('Gurjinder Singh');

//Object Destructuring
let { uName, age } = person;
console.log(uName); //  Gurjinder Singh
console.log(age); // 24

const destructObjectInFunc = ({uName, age}) => {
  console.log(uName);
  console.log(age);
}
destructObjectInFunc(person);

  ```
# Merge Objects
  ```javascript
//Using a spread operator ( ...)
let personalDetail = {
    firstName: 'Gurjnder',
    lastName: 'Singh',
    age: 24,
};


let jobDetail = {
    jobTitle: 'JavaScript Developer',
    location: 'IN'
};

let employee = {
    ...personalDetail,
    ...jobDetail
};

console.log(employee);

//Using the Object.assign() method

let employee = Object.assign(personalDetail, jobDetail);
console.log(employee);
// Below is the console.log(employee) result
{
   firstName: 'Gurjnder',
   lastName: 'Singh',
   age: 24,
   jobTitle: 'JavaScript Developer',
   location: 'IN'
}
  ```
  
  # Array and methods 
```javascript
const hobbies = ['Sports', 'Cookings'];
for (let hobby of hobbies) {
  console.log(hobby)
}
#Map - It iterate over array elements and we can performa action on each item.
console.log(hobbies.map(hobby => {
  return 'Hobby: ' + hobby
})); // [ 'Hobby: Sports', 'Hobby: Cookings' ]
hobbies.push('Programming');
console.log(hobbies); // [ 'Sports', 'Cookings', 'Programming' ]

#Filter - It returns the array after matching the condition.
const arrNumber = [1,2,3,4,5,6,7,8,9,10]
const arrAbove5 = arrNumber.filter(function(num) {
  return num > 5
})
console.log('arrAbove5-> ',arrAbove5) //arrAbove5->  [ 6, 7, 8 ]

#Find - It returns the first array item that matches the callback function or undefined.
let names = ["Sam", "Alex", "Charlie"];
let result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

 # Nullish Coalescing Operator(double question marks (??))
```javascript
- It only returns the second value when the first one is either null or undefined.

const fName = null ?? 'Gurjinder Singh';
console.log(fName); // 'Gurjinder Singh'

let result = 1 ?? console.log('Hi');
console.log(result); // 1
```
 # Callback
```javascript
//Callback is a function that you pass into another function as an argument for executing later.
function downloadImage(url, callback){
  //...downloading code
  callback('success')
}
downloadImage('www.google.com', response => {
  console.log('Image download',response) //Image download success
})
// 2nd example
function filter(numbers, callback) {
  let result = [];  
  for(const number in numbers) {
    if(callback(number)) {
      result.push(number)
    }
  }
  return result;
}
let numbers = [1,2,3,4,5,6,7,8];
let oddNumber = filter(numbers, num => 
  num % 2 != 0
)
console.log('od numebr',oddNumber); // od numebr [ '1', '3', '5', '7' ]
```
# Convert String to Integer
//Using ParseInt

Syntax 1 - parseInt(string) // string value to be parse

Syntax 2 - parseInt(string, radix) // radix is an integer between 2 and 36 that represents the radix. The base in mathematical numeral systems

A radix of 10 converts from a decimal number, 8 converts from octal, 16 from hexadecimal, and so on.
```javascript
console.log(parseInt('100',10)); // 100
```
# FETCH API - How to make a GET and POST request in javascript
  ```javascript
First will see GET Req
  ```
