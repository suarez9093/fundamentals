# What does the keyword new do and how does it relate to prototypes?

New: The new keyword creates an instance of an object that has been defined.
Prototype: All obj inherit properties and methods from a prototype. The prototype property allows you to add new properties to obj constructors

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

// All new objects create from the Person constructor function will now have a nationality property set to English
```
