# Actions and action creators

- An object with a property called type with a string value describing the type of action you want to make

```javascript
const redux = require('redux');

const action = {
  type: 'INCREMENT',
};
```

Action creators are functions that return the object that you care about

```javascript
function increment() {
  return {
    type: 'INCREMENT',
  };
}
```
