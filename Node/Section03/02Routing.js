
// Creating the server using http module
const http = require('http');
const fs = require('fs');


const server=http.createServer(function(req, res){
    const url=req.url;
    const method =req.method;
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
    if(url==='/message' && method==='POST'){
      // get the data from input field
      const body= [];
      req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', ()=>{
        const parseBody=Buffer.concat(body).toString();
        // console.log(parseBody);
        const message = parseBody.split('=')[1];
        fs.writeFile('message.txt', message, (err)=>{
          res.statusCode=302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });
      
    }

     res.setHeader('Content-Type', 'text/html')
     res.write('<html>');
     res.write('<head><title>Node</title></head>');
     res.write('<body>My First Node file</body>');
     res.write('</html>');
     res.end();
});

server.listen(3000);