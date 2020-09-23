# What is the difference between find, filter and reduce?

The find() function returns the value of the first element in an array that passes a function.

```javascript
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];

const item = menuItems.find((item) =>
  item.item.toLowerCase().includes("spicy")
);

console.log(item); // => {item: "Spicy Chicken Rigatoni", price: 18}
```

The filter method creates an array filled with all array elements that pass a function.

```javascript
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];

const items = menuItems.filter((item) => {
  return item.price > 12;
});

console.log(items); // => [{item: "Spicy Chicken Rigatoni", price: 18}, {item: "Ponzu Glazed Salmon", price: 23}, {item: "Philly Cheese Steak", price: 13}, {item: "Pan Seared Ribeye", price: 31}]
```

```javascript
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];

const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;
}, 0);
console.log(total);
```
