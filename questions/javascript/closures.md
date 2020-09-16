# What are Closures

## The combination of a function bundled togeher (enclosed) within references to its surrounding state (lexical environment). A closure gives you access to an outer function's scope from an inner function.

```javascript
function countDown(num, step) {
  // Setting the starting value equal to whatever number is passed into function
  let startingValue = num;

  // Immediatley returns the function before it's called
  return function () {
    // returns whatever mumber is passed into it equal to itself minus the step
    return (startingValue -= step);
  };
}

// count is now equal to the anonymous function where 10 is the num argument passed and 2 is the step argument
const count = countDown(10, 2);

count(); // Returns 8
count(); // Returns 6
count(); // Returns 4
count(); // Returns 2
count(); // Returns 0

// Countdown will return 7
```

- Approach to using HOF to preserve data through closures is called Partial Applicaions
