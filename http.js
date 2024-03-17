const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url_name = url.parse(req.url, true);

    res.writeHead(200, "text/html")
    if (req.url === "/favicon.ico")
        res.end("by")
    else if (req.url === '/')
        res.end(fs.readFileSync("index.html"));
    else if (req.url === '/about')
        res.end(fs.readFileSync("about.html"));
    else if (req.url === '/contact')
        res.end(fs.readFileSync("contact.html"));
    else if (req.url === '/home')
        res.end(fs.readFileSync("home.html"));
    else
        res.end("invalid address ")

});

server.listen(3000, () => {
    console.log("Server Started @http://localhost:3000");
});