# What are getters and setters?

- Allow you to define Object Accessors. They are basically a property where you execute a function or a method when you retrieve a value.

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

```typescript
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  constructor(id: string, private reports: string) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
}
```
