# What are getters and setters?

- Allow you to define Object Accessors

```javascript
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  get clearancePrice() {
    return this.price * 0.5;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);

console.log(product1.clearancePrice); // => 49.975
```
