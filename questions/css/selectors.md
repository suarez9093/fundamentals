# Selectors

```html
<h1 class="title">
  This is my title
  <h1></h1>
</h1>
```

```css
.title {
  font-size: 1.125rem;
  color: #000;
  margin-top: 1.25em;
}
.title::after {
  content: "abcd";
}
```

The ::after following the class title is a pseudo element. This means that it is adding something to the HTML. It adds the content after the content that is currently in the element. The browser adds it after the page is loaded. Mainly used to add decoration without having to add empty markup to your HTML.
