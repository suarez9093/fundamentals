# What is fetch()?

- A method used to call external [API's](api.md) fetch()

## fetch()

The first arguement is the URL and the second param is an object of configurations.

```javascript
// GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // THE HTTP method that we are using
  headers: {
    // Tells the data or content type that we're sending over
    "Content-Type": "application/json",
  },
  body: JSON.stringify(blogPost),
})
  .then((res) => res.json())
  .then((data) => console.log("data: ", data))
  .catch((err) => console.error("error", err))
  .finally(() => console.log("Promise done"));
```

### fetch Promise will resolve even if it is rejected

- If there is a typo in the url it will still return.

```javascript
fetch("https://jsonplaceholder.typicode.com/post")
  .then((res) => res.json())
  .then((data) => console.log("data: ", data))
  .catch((err) => console.error("error", err))
  .finally(() => console.log("Promise done"));
// Will still return even though there is a typo in the url.
fetch("https://jsonplaceholder.typicode.com/post")
  .then((res) => {
    if (!res.ok) {
      // Meaning the response did not come back with a status code of 200
      throw new Error(res.status); // If you throw an error the catch callback will catch the error
    }
    return res.json();
  })
  .then((data) => console.log("data: ", data))
  .catch((err) => console.error("error", err))
  .finally(() => console.log("Promise done"));
```
