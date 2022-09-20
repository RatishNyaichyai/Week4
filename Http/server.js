const http = require('http');
const process = require('process')

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello, World</h1>');
})

server.listen(port, (err) => {
    if (err) throw err;
    console.log('listening')
})