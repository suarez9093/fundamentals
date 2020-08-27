# Events

1. Explain event delegation - A way you can add an event listener once for multiple elements with support for adding extra children.

```javascript
const myList = document.getElementById("myList"); // 1
myList.addEventListener("click", function (event) {
  // 2
  const target = event.target; // 3
  if (target.matches("li")) {
    // 4
    target.style.backgroundColor = "red"; // 5
  }
  const newLi = document.createElement("li"); // 6
  newLi.innerText = "Strawberry"; // 7
  myList.appendChild(newLi); // 8

  /*
  1. Grabbing a reference to the ul by the element id
  2. Adding a click event listener on the ul parent element
  3. Adding a reference to the target element
  4. If the element is an li
  5. Change the background color of the li to red
  6. Creating a new li element
  7. Setting the text content of the newly created li to "Strawberry"
  8. Adding the newLi element to myList. The new li element will inherit the click event listener
  */
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

2. Describe Event Bubbling - When an event occurs on an element the execution of the event is fired from the lowest element in the DOM tree to the highest element.

```html
<body>
    <main onclick="mainClick()">
        <ul onclick="ulClick()">
            <li onclick="click()">One</li>
            <li>two</li>
        </ul>
    <main>
</body>
```

If the li element is clicked the window will fire that event but then also fire the ul and main events as well
