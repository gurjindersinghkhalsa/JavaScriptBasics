# JavaScriptBasics
Basics of Java Script

# Variable and Constants
```javascript
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
  ```
# Object property and Method
```javascript
const person = {
    uName: 'Gurjinder Singh',
    age: 24,
    getName() {
      console.log('My Name is ->' + uName)
    }
}
console.log(person);
person.getName()
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
