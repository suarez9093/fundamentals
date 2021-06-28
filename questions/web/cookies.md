# What are [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)?

- A cookie is nothing but a small text file that's stored in your browser and contains some data:

1. A name-value pair containing the actual data
2. An expiry date after which it is no longer valid
3. The domain and path of the server it should be sent to

## Why?

Servers are stateless meaning they cannot remember if a user has requested a page before. Cookies are mainly used for:
1. Session management - logins, shopping carts, game scores, or anything else the server should remember. 
2. Personalizaton - preferences, themes, and other settings
3. Tracking - Recording and analyzing user behavior. 

### Cookie Attributes

1. Domain - defines where cookies are sent. This specifies which hosts are allowed to receive the cookie. If unspecified it defaults to the same host that set the cookie, excluding subdomains. If Domain is set then subdomains are always included
2. Path
3. Expires
4. Size
5. HttpOnly
6. Secure
7. SameSite