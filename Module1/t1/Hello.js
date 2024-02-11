const http = require("http");

http.createServer(function (req, res) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    req.writeHead(200, {'Content-typw': 'text/plain'});

    // Send the response body as "Hello, World !!!"
    res.end('node js hello world !!! \n');
})