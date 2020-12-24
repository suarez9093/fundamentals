# Resolvers

- Queries and Mutations consist of sets of fields
- Server has one resolver function per field
- Purpose is to retrieve the data for it's corresponding field

```javascript
query{
    User(id: "246234j5"){
        name
        friends(first: 5){
            name
            age
        }
    }
}
```

Resolvers

```javascript
Users(id: String!): User
name(user: User!): String!
age(user: User!): Int!
friends(first: Int, user: User!): [User!]!
```
