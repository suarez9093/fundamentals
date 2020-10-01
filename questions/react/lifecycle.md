## React Component Lifecycle

Every single component that is created goes through a series of phases during its time in a react application.

## Mounting, Updating and Unmounting (3 phases of a react component)

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

2. static getDerivedStateFromProps() - this is called right before rendering the DOM. This is the place to set the state obj based on the initial props.

```javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById("root"));
```

3. render() - only required in class components. Job is to determine what gets rendered to the screen. Outputs the HTML to the DOM.

```javascript
class Header extends React.Component {
  render() {
    return <h1>This is the content of the Header component</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
```

4. componentDidMount() - job is to update the component after it is renderd to the screen. Usually used to grab data from a remote source like an api call

### Updating

- A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

- getDerivedStateFromProps()
- shouldComponentUpdate() - method you can return a Boolean value that specifies whether React should continue with the rendering or not.
  The default value is true.
- render() - Required and will always be called. Others are optional and will be called if defined.
- getSnapshotBeforeUpdate()-gives access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
  If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
- componentDidUpdate()- called after the component is updated in the dom.

### Unmounting

React has only one built-in method that gets called when a component is unmounted:

1. componentWillUnmount() -The componentWillUnmount method is called when the component is about to be removed from the DOM.
