# What is a Class?

Notes:

- Classes are just a cleaner way to work with constructor functions and the prototype
- Classes are functions
- They are used to create Objects with shared methods

```javascript
class Student {
  // the constructor function is used to create properties on classes
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  addSubject() {}
}

console.log(typeof class Student {}); // returns function
```
