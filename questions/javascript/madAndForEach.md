# What is the difference between forEach() and map()

- ForEach() executes a function once for each array element

```javascript
let array1 = [1, 2, 3];

let updatedArray1 = array.forEach((num) => num * 2);
/*
returns undefined
*/
```

- map() creates a new array populated with the results of calling a function on every element in the array.

```javascript
const array2 = [1, 2, 3];

const updatedArray2 = array2.map((num) => num * 2);
/*
returns the new array
*/
```

-
