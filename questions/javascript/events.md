# Events

1. Explain event delegation - A way you can add an event listener once for multiple elements with support for adding extra children.

```javascript
// Grabbing a reference to the ul by the element id
const myList = document.getElementById("myList");
// Adding a click event listener on the ul parent element
myList.addEventListener("click", function (event) {
  // Adding a reference to the target element
  const target = event.target;
  // If the element is an li
  if (target.matches("li")) {
    // Change the background color of the li to red
    target.style.backgroundColor = "red";
  }
  // Creating a new li element
  const newLi = document.createElement("li");
  // Setting the text content of the newly created li to "Strawberry"
  newLi.innerText = "Strawberry";
  // Adding the newLi element to myList
  myList.appendChild(newLi);
  // The new li element will inherit the click event listener
});
```

```html
<ul id="myList">
  <li>Apple</li>
  <li>Bananna</li>
  <li>Orange</li>
  <li>Strawberry</li>
</ul>
```
