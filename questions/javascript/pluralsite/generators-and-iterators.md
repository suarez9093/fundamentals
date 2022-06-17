# JavaScript Generators and Iterators

## Index
1. [What is an Iterator](##iterators)


## Iterators

An iterator is an obj that has the following characteristics
1. Can be enumeratored with the for of loop 
2. It adheres to the Iterator Protocol (It has a Symbol.Iterator key that selects the default method.
3. It returns an object that has a value property and a done property  


## Generator functions

A function that can be paused and resumed at a later point in time. 


```javascript
function* timeStampGenerator(){
    console.log(Date.now())
}


const it = timeStampGenerator();

it.next();

```

- The `yield` keyword signals the pause point of a gen function.
    - This can also receive and send a value from the iterator