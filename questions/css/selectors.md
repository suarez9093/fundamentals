# Selectors

## Pseudo Element

The ::after following the .title class is a pseudo element. The browser adds the HTML content after the content that is currently in the element after loading. This is mainly used to add decoration without having to add empty markup to your HTML.

```html
<h1 class="title">This is my title</h1>
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
