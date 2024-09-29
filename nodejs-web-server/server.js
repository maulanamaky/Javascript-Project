const http = require('http');

const requestListener = (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    
    const {method, url} = req;

    if (url === '/') {
        
        if(method == GET) {
            res.end('<h1>Ini halaman homepage</h1>')
        } else {
            res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }

    } else if (url === '/about') {
        
    } else {
        res.end('<h1>Halaman tidak ditemukan!</h1>')
    }

}

const server = http.createServer(requestListener);

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server running at ${host} port ${port}`)
});