# Short Circuiting

Cutting down on conditional using logical operators to provide a value.

Example:

```javascript
const name = "";

const username = name ? name : "guest";

const username2 = name || "guest";
// This statement is the same as the one above but cuts down on the code by not having to repeat the variable "name"

const response = "Alex";
const isEmailVerified = false;

if (response) {
  if (isEmailVerified) {
    username = response;
  } else {
    username = "guest";
  }
}

const username3 = (isEmailverified && name) || "guest";
// Same as conditional above but using the && operator and || we short circuit. && is a higher operator than || so it will be run first regardless of if || comes before in the expression. If wanting to run an operator expression first enclose it i ()
```
