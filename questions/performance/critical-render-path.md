# Critical Render Path

- What happens when the files arrive in the browser to being displayed in the browser

1. The browser makes a request to the server and the server responds with the HTML file
2. The browser starts reading the HTML file and starts creating the DOM
3. Once the browser encounters a stylesheet it starts creating the CSSOM
4. Once the browser encounters a JS file it reads it and executes the contents of the file.
5. Once the browser finishes reading all the HTML, CSS and JS files it creates the Render Tree.
6. Once the browser finishes the render tree it starts to create the layout and then paints it to the screen

- note. Images are not included in this process. Once the browser encounters an image it will download it in the background and then render it once it is finished

![](./img/image.jpg)
