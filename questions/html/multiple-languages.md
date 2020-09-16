# How to serve a page with content in multiple languages

- To display correctly the browser needs to know what character set to use.

## Character encoding Standards

1. ASCII - defines 128 characters that can be used. (0-9, A-Z and some special characters)
2. ISO-8859-1 - was default for HTML4. Supports 256 different char codes.
3. ANSI - Similar to the one above but with 32 extra characters
4. UTF-8 - Default for HTML5 which covers most characters and symbols in the world.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Tells the browser what character set to use -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```
