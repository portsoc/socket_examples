const PORT = 9999;
const net = require('net')

function listener(socket) {
    console.log('Connection established.');
    socket.on('data', d => {
        console.log(`Reveived: ${d}`);
    });
}

net.createServer(listener).listen( PORT, () => {
    console.log( `use telnet ${require('os').networkInterfaces().en0[1].address} ${PORT}` );
});

// use with
//   telnet 127.0.0.1 9999
//
// try...
//   writing back to the socket as a basic echo
//     socket.write( d );
//   or mangling the data first
//     socket.write( d.toString().split("").reverse().join("-") );