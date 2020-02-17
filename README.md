# Socket Examples

## The `net` Library

### Example 1 - Creating a Network Socket and talking to it.

`node simple_telnet_socket_server` then
`telnet 127.0.0.1 9999`

* Anything typed on the telnet client is sent byte-for-byte through the socket.
* This is a [TCP Socket](https://en.wikipedia.org/wiki/Network_socket) that can be used for network communication.

* Visit http://127.0.0.1:9999/path/to/a/resource and look at the header that arrives on the server.  The browser is speaking HTTP but our server just sees it as a bunch of bytes.  Web servers are just TCP socket servers with code to interpret the HTTP layered on top.

### Example 2 - A 404 Server

`node simple_404_server.js` then open http://127.0.0.1:9999

Since we are in complete control of anything we send over a socket, here
we might have the world's smallest responding web server. The short version in `simple_404_one_line.js` is just 76 characters long.

## WebSockets

### Example 3 - A WebSocket with an Express HTTP server

`node simple_web_socket/server.js` then open http://127.0.0.1:9999

Files:

* `simple_web_socket_server.js` is a minimal web socket server which echoes data sent
   * it is complemented by an Express.js HTTP server that serves files from `simple_web_socket_client`

* `simple_web_socket_client/index.html` is a page of two text areas: typing in the left-hand text results in the key codes being sent to the server over a web socket.  Any message received from the server is put in the right-hand panel.
