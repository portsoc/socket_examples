'use strict';

const PORT = 9999;

const http = require('http');
const ws = require('ws');
const fs = require('fs');
const path = require('path');

// preload the client-side for streaming
const pathname = path.join(__dirname, "index.html");
const index = fs.readFileSync(pathname);

function listener(socket) {
	socket.on( 'message', (msg) => {
        console.log(`Message: ${msg}`);
        socket.send(msg);
    });
}

function httphandler(req, res) {
    res.setHeader('Content-type', 'text/html' );
    res.end(index);
}

const server = http.createServer( httphandler );
const wssserver = new ws.Server({ server: server });

wssserver.on('connection', listener);

server.listen(8888, () => console.log('Server started.') );


net.createServer(listener).listen(PORT, () => {
    console.log( `http://${require('os').networkInterfaces().en0[1].address}:${PORT}` );
   });
   