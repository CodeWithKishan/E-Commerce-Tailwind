const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const test = fs.readFileSync('./test.html')
const blog = fs.readFileSync('./blog.html')
const profile = fs.readFileSync('./profile.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/test'){
        res.end(test);
    }
    else if(url == '/blog'){
        res.end(blog);
    }
    else if(url == '/profile'){
        res.end(profile);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

