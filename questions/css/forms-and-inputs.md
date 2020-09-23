# Forms and inputs

You can style inputs in the following way

```css
/* Will only select text fields  */
input[type=text]

/* Will only select password fields */
input[type=password]

/* Will only select number fields */
input[type=number]

```

## Adding an icon/image to an input

If you want an icon inside the input, use the background-image property and position it with the background-position property.

```css
input[type="text"] {
  background-color: white;
  background-image: url("searchicon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
```

![](../images/search.png)
