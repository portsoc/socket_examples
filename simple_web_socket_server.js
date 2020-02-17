'use strict';

const PORT = process.env.PORT || 9999;

const http = require('http');
const ws = require('ws');
const express = require('express');

const app = express();
app.use(express.static('simple_web_socket_client'));

// create an HTTP server with the express app above
const server = http.createServer(app);

// simply echo the incoming data back to the client
function listener(socket) {
  socket.on('message', (msg) => {
    console.log(`Message: ${msg}`);
    socket.send(msg);
  });
}

// connect a WebSocket server to the HTTP server
const wsServer = new ws.Server({ server: server });
wsServer.on('connection', listener);

server.listen(PORT, () => console.log('Server started.'));
