# What is a Class?

Notes:

- Classes are just a cleaner way to work with constructor functions and the prototype
- Classes are functions
- They are used to create Objects with shared methods

```javascript
class Student {
  // the constructor function is used to create properties on classes
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  addSubject() {}
}

console.log(typeof class Student {}); // returns function
```

### Share class features with Extends

You can share features of one class in another by using the extends keyword.

```javascript
// Defining the class
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }
}

// The naming convention is to suggest that this class is sharing properties with the Product class.
class SaleProduct extends Product {
  // This is the derived class
  constructor(percentOff) {
    this.percentOff = percentOff;
  }
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);

console.log(product1); // => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

What the error is saying is that in the SaleProduct class you must call super().

```javascript
// It calls the constructor method of the class that we're extending. In this case super would call the Product class.
super();
```

```javascript
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }
}

// The naming convention is to suggest that this class is sharing properties with the Product class.
class SaleProduct extends Product {
  // This is the derived class
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable, percentOff);
    this.percentOff = percentOff;
  }
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);

console.log(product1);
// => SaleProduct {
//     name: 'Coffee Maker',
//     price: 99,
//     discountable: true,
//     percentOff: 20
//   }
```

```javascript
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  isDiscountable() {
    return this.discountable;
  }
}

// The naming convention is to suggest that this class is sharing properties with the Product class.
class SaleProduct extends Product {
  // This is the derived class
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable, percentOff);
    this.percentOff = percentOff;
  }
  getSalePrice() {
    return super.isDiscountable()
      ? this.price * ((100 - this.percentOff) / 100)
      : `${this.name} is not eligible for a discount`;
  }
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(product1.getSalePrice()); // => returns 79.2
```
