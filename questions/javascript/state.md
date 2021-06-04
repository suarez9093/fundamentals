# What is state and how do you manage it?

The data in our application that has to be managed

```javascript
class App {
  // constructor to set properties on the app
  constructor() {
    //   where we're holding our state
    this.state = {
      isAuth: false,
      error: '',
      user: true,
    };
    // declaring functions
    this.checkAuth();
    this.render();
  }
  checkAuth() {
    if (this.state.user) {
      this.state = { ...this.state, isAuth: true };
    } else {
      this.state = { ...this.state, error: 'You must log in!' };
    }
  }

  render() {
    document.getElementById('root').innerHTML = `
      <div style="color: ${this.state.error && 'red'}">
     ${this.state.isAuth ? 'Welcome back' : this.state.error}
      </div>
      `;
  }
}

new App();
```

## How to manage it?

With reducers which are functions that take two arguments

```javascript
const reducer = (state, action) => newState;
const initialState = {
  count: 0,
  user: '',
};

function counterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}
console.log(counterReducer(initialState, { type: 'INCREMENT', payload: 3 }));
console.log(counterReducer(initialState, { type: 'DECREMENT', payload: 9 }));
```
