# Events

1. Explain event delegation
   - A way you can add an event listener once for multiple elements with support for adding extra children.

```javascript
const myList = document.getElementById("myList");
myList.addEventListener("click", function (event) {
  const target = event.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "red";
  }
});
```

```html
<ul id="myList">
  <li>Apple</li>
  <li>Bananna</li>
  <li>Orange</li>
</ul>
```
