# What is the difference between var, let and const?

- Similarities:
  - They are all variables. Variables are a container to store data.

## Differences

## var

```javascript
console.log(greeter);
var greeter = "say hello";

// ===============================
// Because of Hoisting the above code is interpreted as the following
var greeter;
console.log(greeter); // => undefined
greeter = "say hello";
```

When var is hoisted to the top of their scope it is initialized with a value of undefined.

## let

```javascript
var hello = "hi";
var hello = "hello";

console.log(hello); // => will return hello

let hello = "hello";
let hello = "hello";

console.log(hello); // will return an error that hello has already been declared.
```

## const

```javascript
const hello;

hello = "hi"
console.log(hello) // will get an error that const is missing an initializer
```

- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.
