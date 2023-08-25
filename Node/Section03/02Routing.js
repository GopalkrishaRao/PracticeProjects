
// Creating the server using http module
const http = require('http');

const server=http.createServer(function(req, res){
    const url=req.url;

   if (url === '/'){
    res.write('<html>');
     res.write('<head><title>Node</title></head>');
     res.write(`<body>
      My First Node file
      <form action="/message" method="POST">
        <input type = "text" name="message">
        <button type = "submit"> Send </button>
      </form>
      </body>`);
     res.write('</html>');
     return res.end();

   }
    
     res.setHeader('Content-Type', 'text/html')
     res.write('<html>');
     res.write('<head><title>Node</title></head>');
     res.write('<body>My First Node file</body>');
     res.write('</html>');
     res.end();
});

server.listen(3000);