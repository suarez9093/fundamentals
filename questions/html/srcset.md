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
