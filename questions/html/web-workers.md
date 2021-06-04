# What are web workers?

A web worker is a script that runs in the background without the page needing to wait for it to complete.

```javascript
// In main.js
if (window.Worker) {
  const worker = new Worker('worker.js');
  worker.postMessage('https://jsonplaceholder.typicode.com/todos/1');

  worker.onmessage = function (e) {
    console.log('e.data', e.data);
  };
}

// In worker.js

onmessage = async function (e) {
  const data = await fetch(e.data).then((response) => response.json());

  postMessage(data);
};
```
