# What is prototypical inheritance?

- Each of the Objects that are created from a constructor function inherits all of its properties and methods from prototype.

- Every Object has a prototype property

```javascript
Object.getPrototypeOf({}.constructor); // => returns the constructor function that defined the Object

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, "Reed");
console.log(student1.__proto__); // => (__proto__ called dunder proto)returns Student (the Object created by the constructor function that the current obj inherits from)
console.log(student1.__proto__.__proto__); // => (__proto__ called dunder proto) returns Object()
```
