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
