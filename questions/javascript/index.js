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
console.log(product1.getSalePrice());
