# Socket Examples

## The `net` Library

### Example 1 - Creating a Network Socket and talking to it.

`node simple_telnet_socket_server` then
`telnet 127.0.0.1 9999`

* Anything typed on the telnet client is sent byte-for-byte through the socket.
* This is a TCP/IP Socket[1](https://en.wikipedia.org/wiki/Network_socket)[2](https://www.ibm.com/support/knowledgecenter/en/SSB27H_6.2.0/fa2ti_what_is_socket_connection.html) that can be used for interprocess communication.

* Visit `http://127.0.0.1:9999/path/to/a/resource` and look at the header that arrives on the server.  The browswer is speaking HTTP but our server just sees it as a bunch of bytes.  Web servers are just TCP socket servers with a little code to interpret the HTTP layered on top.

### Example 2 - A 404 Server

We are in complete control of anything we send over a socket, so
(for example) we can build the worlds smallest responding web server.

```
node simple_404_server.js
open http://127.0.0.1:9999
```

The short version is just 79 characters long.

### Example 3 - A *Web* Socket
* In the `simple_web_socket` foler there are two files.
  * `index.html` is a page of two textareas.  Typing in the left-hand text 
    results in the keycode being sent to the server over a websocket.  When
    it receives data from the server it is put in the right hand panel. 
  * `server.js` is a minimal web socket server which echoes data sent
    to the server.

```
node simple_web_socket/server.js
open http://127.0.0.1:9999
```
