# What is a Promise?

## Promise

- Tells us the status (pending, resolved, rejected) of async code that we're executing so we can do what we need as it's being resolved and handle the final outcome of either resolved or rejected.

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    ,1000)
});
```

- All created promises can invoke two methods. The then() and the catch() methods.

### then()

- When a promise is resolved it calls the function passed to the then() method.

```javascript
// Creates a new instance of the Promise object
let promise = new Promise((resolve, reject) => {
  // after 1 second the Promise is set to resolved passing in an obj of data.
  setTimeout(
    () =>
      resolve({
        first_name: "Alex",
        last_name: "Suarez",
      }),
    2000
  );
});
// Once the promise is resolved the then() method is called and the callback function that is passed to it is executed.
console.log(promise.then((res) => console.log("res: ", res)));
```

- All created promises can invoke two methods. The then() and the catch() methods.

### then()

- When a promise is resolved it calls the function passed to the then() method.

```javascript
let promise = new Promise((resolve, reject) => {
  // after 1 second the Promise is set to resolved passing in an obj of data.
  setTimeout(() => reject("error"), 2000);
});
// Once the promise is resolved the then() method is called and the callback function that is passed to it is executed.
console.log(promise.catch((err) => console.log("err: ", err)));
```

### catch()

- When a promise is rejected the callback function inside the catch() method is executed.

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    ,1000)
});
```

### finally()

- When a promise is either resolved or rejected the finally function is called.

```javascript
let promise = new Promise((resolve, reject) => {
  // after 1 second the Promise is set to resolved passing in an obj of data.
  setTimeout(() => reject("error"), 2000);
});
// Once the promise is resolved the then() method is called and the callback function that is passed to it is executed.
console.log(
  promise.catch((err) =>
    console.log("err: ", err).finally(() => console.log("done"))
  )
);
```
