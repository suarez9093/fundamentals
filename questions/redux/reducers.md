# Reducers

- A function that returns new state

```javascript
function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
    };
  }
}
```
