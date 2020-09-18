# This

What is this? "this" refers to the current object the code is being written inside

There are 4 main ways in which the "this" keyword can dynamically change:

1. in the global context
2. as a method on an object
3. as a constructor function or class constructor
4. as a DOM event handler

```javascript
/*
1. Global context
=====================================================
*/
console.log(this); // => returns window

function whatIsThis() {
  console.log(this); // => window (that is because we're not in "use strict" mode. If using "use strict it will return null")
}

/*
2. Method on an Object context
=====================================================
*/
const user = {
  job: "Developer",
  getJob() {
    console.log(`I am a ${this.job}`);
  },
  userInfo: {
    firstName: "Alex",
    lastName: "Suarez",
    getUser() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
  },
};
user.userInfo.greetUser(); // => "Hi, Reed Barger". 'this' refers to the obj in which it's called in.
user.getJob(); // => "I am a Developer"

/*
3. Constructor function or Class constructor
=====================================================
*/

class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;
  }

  getAge() {
    console.log(`${this.first}'s age is ${this.age}`);
  }
}

const user = new User("Alex", 32);

user.getAge(); // => Alex's age is 32

/*
4. As a DOM handler
=====================================================
*/

const button = document.createElement("button");
button.textContent = "Click";
document.body.appendChild(button);

button.addEventListener("click", function () {
  console.log(this); // => <button>
});


/*
5. Method reuse
=====================================================
*/
call() apply() bind()

// =============
call()
const user = {
  name: "Reed",
  title: "Programmer"
}

function printUser(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

printUser.call(user, "London", "England");
 // => passes the user obj into the printUser function this would be like setting a method on the obj user and using this in the function.

// =============
apply()

const user = {
  name: "Reed",
  title: "Programmer"
}

function printBio(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

printBio.apply(user, ['London', 'England'])

// Difference between call and apply is that you have to pass the arguements as an array and not as individual arguements.
// =============
bind() // binds this to a specific object

const user = {
  name: "Reed",
  title: "Programmer"
}

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

const userDescription = printUser.bind(user);

const user2 = {
  name: "Doug",
  title: "Entrepreneur"
}

printUser.bind(user2)

userDescription(); // goind to be bound to the origional obj it was bound to. so "Reed is a Programmer would be the result of calling userDescription"

// ===================

const user = {
  first: 'Bob',
  fn() {
     console.log(this.first);
  },
  arrowFn: () => {
    console.log(this.first);
  }
}

user.arrowFn(); // returns null. Arrow functions don't have their own this binding

```
