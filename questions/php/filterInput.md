# Filter Input

<!-- http://yourdomain.com/index.php?name=<a href="https://google.com">Click Me</a>  -->

1. filter_input(type of filter, variable , name of filter) => provides security by stripping code from the query string.

```php

echo filter_input( INPUT_GET, ‘name’, FILTER_SANITIZE_STRING );

```
