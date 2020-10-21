# What is Encapsulation?

- Dividing the program into smaller pieces and make each piece manage it's own state.

# What is Polymorphism

- When a piece of code is written to work with objects that have a certain interface, in the case of toString, any kind of obj that happens to support this interface can be plugged into the code and it will just work. This technique is called Polymorphism. The for/of loop is an example of Polymorphism as it can loop over several kinds of data structures because the data structures provide a certain interface.

```javascript
for (let value of "hello") {
  console.log(value);
}
/*
returns h e l l o
*/
for (let value of [1, 2, 3, 4]) {
  console.log(value);
}
/*
returns 1 2 3 4
*/
```
