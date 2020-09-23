# How are events different in React that in the browser?

- There are some syntax differences

```html
<!-- In the browser -->
<button onclick="activateLasers()">Activate Lasers</button>

<!-- In React -->
<!-- Events are named using camelCase -->
<!-- With JSX you pass a function as the event handler rather than a string -->
<button onClick="{activateLasers}">Activate Lasers</button>

<!-- Browser -->
<!-- Prevents the default behavior of opening link in new page  -->
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

```javascript
// In React this is how it would look
function ActionLink() {
  function handleClick(e) {
    e.preventDefault(); // e is synthetic event
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

React events do not work exactly like native events. => [Synthetic Events](sytheticEvent.md)
