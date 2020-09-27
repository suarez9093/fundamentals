# What is Async/Await?

- A differenct syntax for working with Promises

### Async

- Whenever we use the async keyword it will always return a promise

```javascript
async function getBlogPost() {
  return "data"; // This will be passed to the then() automatically if there is not an error thrown
}

getBlogPost()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

async function getBlogPost() {
  throw new Error(); // This will be passed to the catch()
}

getBlogPost()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

### Await

- await pauses code on the line it's used resolves the promise when placed before a promise and immediatley allow us to use the resolved value how we would like and then resumes the function.

```javascript
async function getBlogPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
  console.log("done");
}

getBlogPost(); // returns an obj with the data requested
```

## try{} catch{}

- try{} and catch{} are a way for handeling async code and errors since async await does not have a specific way to catch errors.

```javascript
const container = document.getElementById("container");
async function getGithubUser() {
  try {
    const response = await fetch("https://api.github.com/users/lasdkfalsdfh");
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const user = await response.json();
      console.log(user);
    }
  } catch (err) {
    console.error("err: ", err);
  }
}
getGithubUser();
```
