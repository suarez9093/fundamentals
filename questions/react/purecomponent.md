# What is the difference between React.Component and React.PureComponent

- React.Component is the base class for react components. React.PureComponent is similar to React.Component. Difference is that React.Component does not implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

Shallow comparison: Think about it like a === in JS.

```javascript
// For Primitive types (strings, bool, numb) a shallow comparison would be using the === against the two values
console.log("hello" === "hello"); // true

// Complex Types (array, obj)

console.log({} === {}); // false
// This is because obj are passed by reference not by value. They're stored in different places in memory

const state = {
  favNumber: 42,
  name: "Bob",
};

const state2 = {
  favNumber: 42,
  name: "Bob",
};

const person = state;
console.log(person === state); // true. The person variable is pointing to the same obj in memory

// A shallow comparison of the two above objects is compairng the two obj's keys.
console.log(state.favNumber === state2.favNumber); // true
```
