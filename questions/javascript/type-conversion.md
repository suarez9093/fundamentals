# What is type conversion?

- Javascript tries to exectue any program that it's given. So if it is given certain values that are of the wrong type it will convert the value into the type that it needs

```javascript
console.log(8 * null); // => 0. JS converts the null value into 0
console.log("5" + 1); // => 51. JS converts the 1 into a string.
console.log("5" - 1); // => 4. JS converts the 5 into a number
```
