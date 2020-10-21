# What is a srcset and why would you use it?

A srcset attribute specifies a URL of the image to use is different situations

'''html
<picture>

  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
<!-- Allows you to load a different image once the screen size reaches a certian width -->
'''

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
            800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>
```

1. srcset: defines the set of images we will allow the browser to choose between, and what size each image is. Each set is separated by a comma.

- image filename (elva-fairy-480w.jpg)
- A space
- The image's width in px (480w) - uses the w unit and not the px. This is the image's real size which can be found by inspecting the image on the computer.

2. Sizes - defines a set of media conditions (screen width) and indicates what image size would be best to choose.

- a media condition (max-width: 600px e.g when the viewport width is 600px of less)
- a space
- the width of the slot the image will fill when the medai condition is true (480px)
