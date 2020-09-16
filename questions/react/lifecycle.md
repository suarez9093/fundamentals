## React Component Lifecycle

Every single component that is created goes through a series of phases during its time in a react application.

## Mounting, Updating and Unmounting

### Mounting: These methods are called in the following order when an instance of a component is being created and inserted in the DOM.

1. constructor() - Used to initialize state and bind methods. If there is no state or not binding methods then the constructor is not needed.

```javascript
constructor(props){
    // Should call super before any other statement. Otherwise this.props will be undefined in the constructor
    super(props)
    this.state = {
        counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
}

```

2. static getDerivedStateFromProps()
3. render() - only required in class components. Job is to determine what gets rendered to the screen.
4. componentDidMount() - job is to update the component. Usually used to grab data from a remote source like an api call
