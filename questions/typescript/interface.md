# Interface

- Describe the structure of an object

```typescript
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Alex",
  age: 33,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};
```
