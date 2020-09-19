# What is hoisting

- JavaScripts way of moving declarations to the top of the current scope (to the top of the script or function). JavaScript only hoists declarations not initializations. So to prevent ReferenceError's declare variables at the beginning of every scope.

## Var

In JS a var can be used before it is declared but let and const cannot

```javascript
x = 5; // use

console.log(5 + x); // => 10

var x; // Declare X
```

## Let and Const

Variables declared with let and const are hoisted to the top of the block, but not initialized. The block is aware of the variable but it cannot be used until it has been declared.

```javascript
carName = "Volvo";
alert(carname); // => ReferenceError
let carName;
```
