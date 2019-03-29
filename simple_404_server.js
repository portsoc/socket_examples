 /*
  * A Web server that always returns a 404.
  * Illustrates that HTTP1 is plain text
  * so browsers can interact with something
  * this basic.
  */
const PORT = 9999;
const net = require('net');

function listener(socket) {
    socket.write("HTTP/1.0 404 Not Found\r\n\r\n");
    socket.write("NOT FOUND\r\n\r\n");
    socket.end();
}

net.createServer(listener).listen(PORT, () => {
 console.log( `http://${require('os').networkInterfaces().en0[1].address}:${PORT}` );
});
