require('net').createServer(s=>s.end("HTTP/1.0 404 X\r\n\r\n404")).listen(9999)
// Could this be the world's smallest responding web server in node? 79 chars
