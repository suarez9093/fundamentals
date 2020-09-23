# What does the spread operator do in JavaScript?

## The spread operator assigns keys and values of an object in a new object without mutating the original object.

```JavaScript
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""
};

const newUser = {
  username: "Alex Suarez",
  email: "alex@gmail.com",
  password: "mypassword"
};

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
// {name: "", username: "Alex Suarez", phoneNumber: "", email: "ralex@gmail.com", password: "mypassword", verified: false}

```
