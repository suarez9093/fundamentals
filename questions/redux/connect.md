# What does connect do?

- Ties together your redux store and your component

### What is connect?

- A HOC. It takes two parameters.

1. What parts of the global state does this component want access to.
2. What actions do you want to be able to dispatch from this component

- Then returns a function to which you pass the component you want to connect. When called, this function creates a new component wrapping yours which passes the global state and dispatchanbe actions to your componet via props.

### connect()

```javascript
connect(
  'What parts of state do you want',
  'What actions do you want to dispatch'
)(Component);
```

### mapStateToProps()

```javascript
function mapStateToProps(globalState) {
  // return an obj where the keys are the name of the prop your component wants
  // values are the actual parts of the global state your component wants
  return {
    bananas: 'Hello', // now means that the props that are passed down to the Component now has access to props.bananas
  };
}

connect(mapStateToProps, 'What actions do you want to dispatch')(Component);
```

### mapDispatchToProps

```javascript
import { increment, decrement } from 'redux/index';
const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
};

connect(mapStateToProps, mapDispatchToProps)(Component);
```
