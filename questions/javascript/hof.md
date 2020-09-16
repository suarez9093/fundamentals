# What is a higher order function?

### A function that receives a function as an arguement OR returns the function as output

Examples build into JS

1. Array.prototype.map
1. Array.prototype.filter
1. Array.prototype.reduce

```javascript
const arr1 = [1, 2, 3];

const arr2 = arr1.map((item) => item * 2);
```
