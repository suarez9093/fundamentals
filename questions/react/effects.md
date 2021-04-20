# Effects

1. What parameters does useEffect take in? The function to call and when to call it

```javascript
useEffect(() => {
  console.log('Ran');
}, []); // Runs on mount
useEffect(() => {
  console.log('Ran');
}, [variable]); // Runs on mount and when variable changes
useEffect(() => console.log('Ran')); // Runs on every state change
```

2. What is useEffect function's return value? A cleanup function that cleans up any event listeners. fetch cancellations that you want to put in
