# Big O Notation


## Index
- [Description](###description)
- [Measuring Performance](###measuring-performance)

## Time Complexity

### Description
A way to analyze the performance of code. A way to describe the input to a function and the relation of the time it takes to execute


### Measuring Performance
- [Count Operations](####count-operations)

#### Count Operations
We can get an idea of the performance of an algorithm by counting the number of operations it performs. 

```javascript
function addUpTo(n) {
 return n * (n + 1) / 2;

 /*

 * = 1
 + = 2
 / = 3

 Total of three operations happening in the function
 */
}

function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total
}


// As n grows the number of operations increases

```

O(f(n)) can be 

linear (f(n) = n) = O(n)
quadratic (f(n) = n2) = O(n2)
constant (f(n) = n = 1) // O(1)
or something else

## Space Complexity

We can also use O notation to depict how much space an algorithm uses to run the code

- Most primitive types (bool, numb, undefined, null) are constant space
- Strings, arrays and objects are O(n)


### Logarithms
They are the inverse of an exponent

```javascript
log2(8) = 3 // 2^3 = 8

// This reads log base 2 of 8 equals 3
// This is essentially saying that 8 is 2 to the power of 3. (At what power does 2 equal to 8?) 2^3 = 8

// log2(value) = exponent

```