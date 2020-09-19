# What is 'use strict' in JavaScript?

- Defines that JavaScript should be run in strict mode.

## What does strict mode do

1. Cannot use undeclared variables
2. Deleting a variable or function is not allowed
3. Duplicating a parameter name is not allowed
4. Certain variable names cannot be used such as eval and arguents
5. this behaves differntly

```JavaScript
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

// if not in strict mode it would return the global this

```
