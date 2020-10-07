# What is recursion? Give an example of how to use it

- Recursion is a function that calls itself:

```javascript
// Write a recursive function that returns the factorial of the number passed into it.
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(4); // => 24
/*
4 * factorial(3)                4 * 6 = 24
  3 * factorial(2)          3 * 2 = 6
    2 * factorial(1)    2 * 1 = 2
      1 is returned  
*/
```
