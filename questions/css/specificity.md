# What is Specificity

- A score or rank to determine which css declarations are applied to an element.
  <br /> \* has lowest while inline style has highest.
  <br />
  In rank it goes inline:
  1. style (1000 pts)
  2. id (100 pts)
  3. class, attributes or pseudo selectors (10 pts)
  4. element selectors (1 pt)

### HTML

```html
<body>
  <h1 id="h1" class="h1" style="color: orange">Coding challenge: Events</h1>
</body>
```

### CSS

```css
#h1 {
  color: red;
}
.h1 {
  color: blue;
}

h1 {
  color: green;
}
```

The above example with have the orange text as it is an inline style
