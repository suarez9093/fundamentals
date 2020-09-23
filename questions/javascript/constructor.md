# What is a constructor function?

- A blueprint for a object. Used to create an object of the same type. It creates an obj on demand and allows us to pass in the same methods and keys to each instance of that object.

To create an object type is to use a object constructor function. The name of the function describes the data that it will output and not what the function will do.

```javascript
function Person(first, last, age, eyes) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyes;
  this.sayHello = function () {
    return "Hello" + this.firstName + " " + this.lastName;
  };
}

let father = new Person("John", "Doe", 50, "blue");
// The "new" keyword allows the creation of the defined obj
console.log(father.firstName); // => John
```
