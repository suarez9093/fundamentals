# Async vs Defer

- Problem with normal loading of script tags is that it pauses the loading of the HTML until the script tag is loaded from the server and then executed.

# Async

Downloads while the HTML file is loading and parsing. Once downloaded, pauses HTML in order to execute the code.

```javascript
<script src='./logic.js' async></script>
```

# Defer

Downloads while the HTML file is loading and parsing. Won't execute the code until the HTML file is complete.

```javascript
<script src='./logic.js' defer></script>
```

# Preload

Allows you to declare fetch requests in the HTML's <head>, specifying resources that your page will need very soon, which you want to start loading early in the page lifecycle, before browsers' main rendering machinery kicks in

```javascript
<link rel="preload" href="styles/main.css">
```

rel="preload" turns <link> into a preloader for any resource we want. You will also need to specify:
