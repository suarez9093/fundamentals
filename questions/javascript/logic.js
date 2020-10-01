// Challenge:
// 1. Select h1 and add a click event listener.
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const h1 = document.querySelector("h1");

h1.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

const body = document.querySelector("body");
console.dir(body.children);

for (let i = 0; i < body.children.length; i++) {
  body.children[i].addEventListener("mouseover", (e) => console.log(e.target));
}
