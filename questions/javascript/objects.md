# Objects


## Index

1. [Definition](##definition)
2. [Resources](##resources)

## Definition
Object are more complex variable types. 

### How to declare objects

Object Literal:

```javascript
let person = {
    firstName: 'Alex',
    lastName: 'Suarez'
}
```

Equality Operators
For variable types, using === compares their values. When using this on objects it compares them in memory so this will return false

```javascript
const person = 'Alex'
const name = 'Alex'

person === name // true

const obj = {
    name: 'Alex'
}

const obj2 = {
    name: 'Alex'
}

obj === obj2 // false

// Compares them in memory so it will return false
```


## Propery Descriptors
Using Object.getOwnProperyDescriptor(object, property)

This will return the descriptors such as 

```javascript
value, writable, enumerable, configurable

```




## Resources


