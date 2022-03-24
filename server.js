const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("I'm Homepage");
    }
    if (req.url === '/about') {
        res.write("i'm about us");
    }
    res.end("im done");
})


server.listen(5000);