# What is SSL?

SSL stands for secure sockets layer
TLS stands for Transport layer security (Modern version of SSL)
HTTPS = HTTP + TLS

TLS solves three things.

1. Integrity - content cannot be tampered with
2. Encryption - Content cannot be read by others.
3. Authentication - You're actually connected to the server you think you're connected to.

How does SSL work?

1. When your browser talks to a server it asks if the communication can be secure using the protocol it supports.
2. The server then picks a protocol based on what is available.
3. Server then sends the SSL certificate and a random string and the browser then sends back a random string.
4. When accessing the server the broswer uses the public key that was sent over in the certificate and the server uses the private key. They should arrive at the same generated code. Browser tells server what code it got. Server tell the broswer what code it received and if they match a key is generated for that session and everything else will be encrypeted with that key.
5. What's being sent is not the key itself but a message encrypted with that key.
6. When the browser sends a request to /about the request is encrypted and can only be decrypted by the server.

<!-- https://www.cloudflare.com/learning/ssl/what-is-ssl/ -->
<!-- https://www.cloudflare.com/diagnostic-center/ -->
