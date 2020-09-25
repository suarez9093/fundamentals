# Callbacks VS Promises VS Async Await

## Callback

- a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function greeting(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

## Promise

- Tells us the status (pending, resolved, rejected) of async code that we're executing so we can do what we need as it's being resolved and handle the final outcome of either resolved or rejected.

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    ,1000)
});

```
