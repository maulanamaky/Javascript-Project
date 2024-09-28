const http = require('http');

const requestListener = (req, res) =>{
    res.setHeader('Content-Type', 'text/html');

    res.statusCode = 200;
    res.end('<h1>test</h1>')
}

const server = http.createServer(requestListener);

const port = 3000;
server.listen(port);
console.log(`Server running at port ${port}`)

