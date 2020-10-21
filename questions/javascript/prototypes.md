# Prototypes

1. Most objects have a Prototype. A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property it does not have its prototype will be searched for the property then the prototype' prototype etc.

```javascript
let empty = {};

console.log(Object.getPrototypeOf(empty) === Object.prototype); // => true
```

Functions are derived from Function.prototype and arrays derive from Array.prototype

```javascript
function test() {}
console.log(Object.getPrototypeOf(test) === Function.prototype); // => true
console.log(Object.getPrototypeOf(Math.max) === Function.prototype); // => true
console.log(Object.getPrototypeOf([]) === Array.prototype); // => true
```

```javascript
let protoRabbit = {
  fluffy: true,
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  },
};
let killerRabbit = Object.create(protoRabbit); // creates an object with a specific prototype. killerRabbit gets it's prototype from protoRabbit
console.log(Object.getPrototypeOf(killerRabbit)); // {fluffy: true, speak: [Function: speak]}
```
