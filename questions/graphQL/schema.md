# Schema

- GraphQL has it's own type system, Schema Definition Language (SDL), to define the schema of the api.
- Defined the capabilities of the API by specifying how a client can fetch and update data.
- collection of GraphQL types with special root types

```javascript
type Person {
    name: String!
    age: Int!
    posts: [Post!]! // indicates it has a relation with the Post type and is a list
}
type Post {
    title: String!
    author: Person! // specifies that this field has a relation with the Person type
}
```

It's also possible to have a relations between types which is called a relation

### The Query type

```javascript
type Query {
    allPersons(last: Int): [Person!]!
}

{
    allPersons{
        name
    }
}
```

### The Mutations type

```javascript
type Mutation{
    createPerson(name: String!, age:String!): Person!
}
mutation {
    createPerson(name: "Bob", age: 36){
        id
    }
}
```

### The Subscription Type

```javascript

type Subscription{
    newPerson: Person!
}

subscription{
    newPerson{
        name
        age
    }
}

```
