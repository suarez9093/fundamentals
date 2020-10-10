# What are parts of a request?

GET https://postman-echo.com/get?arg1=value1&arg2=query2#fragment_id

The GET is the request method (verb).

https - scheme.

Other schemes:

ws - websocket
wss - websockets secure
ftp - file transfer protocol
sftp - secure file transfer protocol

The scheme tells the browser how to send the request and how to make sense of the response.

postman.echo.com - domain

Every request has a port

Ports are the reason something on the internet and talk to a server.

/get is the path. Tells the server what content you want.

query: arg1=value1&arg2=query2

fragment_id: Used for navigation within a page

Headers: Are extra information about the request including cookies.

```javascript
const link =
  "https://subdomain.domain.com:8080/path/to/a/page?queryvar1=value1&qv2=c#hello";

parseLink(link);

/**
 * Do not edit this function.
 */
function parseLink(link) {
  try {
    const parsedURL = new URL(link);
    console.log("protocol: " + parsedURL.protocol);
    console.log("username: " + parsedURL.username);
    console.log("password: " + parsedURL.password);
    console.log("hostname: " + parsedURL.hostname);
    console.log("port: " + parsedURL.port);
    console.log("path: " + parsedURL.pathname);
    console.log("query string: " + parsedURL.search);

    for (const [key, value] of parsedURL.searchParams) {
      console.log(" - " + key + ": " + value);
    }

    console.log("fragment: " + parsedURL.hash);
  } catch (error) {
    console.error("Not a valid URL");
  }
}
```
