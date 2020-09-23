# What are attributes?

- They provide additional information about HTML elements.

Notes:

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"-

```HTML
<!-- href attribute specifies the URL of the page -->
<a href="https://www.w3schools.com">Visit W3Schools</a>
<!-- src specifies the path to the image. Can also be a URL -->
<img src="img_girl.jpg">

<!-- data attributes allow the developer to store information on information on HTML elements -->
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

```javascript
const article = document.querySelector("#electric-cars");

// You can get the property by the part after the - in data-*. Dashes are converted to camelCase.
article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```
