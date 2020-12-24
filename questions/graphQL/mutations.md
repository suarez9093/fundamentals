# Mutations

- Allows changes to be made to the data

### Three kinds of mutations

1. Create
2. Update
3. Delete

```javascript

mutation {
    createPerson(name: "Bob", age: 36){
        name
        age
    }
}

```
