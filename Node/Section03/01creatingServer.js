
// Creating the server using http module
const http = require('http');

const server=http.createServer(function(req, res){
    console.log(req.url, req.method, req.headers);
    // to exit the program
    // process.exit() 
    
     res.setHeader('Content-Type', 'text/html')
     res.write('<html>');
     res.write('<head><title>Node</title></head>');
     res.write('<body>My First Node file</body>');
     res.write('</html>');
     res.end();
});

server.listen(3000);