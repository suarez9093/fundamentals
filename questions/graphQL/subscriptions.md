# Subscriptions

- Allows the client to listen to the server for specific events and have the server send over the information

```javascript
subscription{
    newPerson{
        name
        age
    }
}

```

Whenever a new person is created the name and age fields will be sent to the client
