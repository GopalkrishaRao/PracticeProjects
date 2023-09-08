const fs = require('fs');
// connect routes.js to 03app.js
const requestHandler= (req, res)=>{
const url =req.url;
const method= req.method;

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

}

module.exports ={
  handler:requestHandler,
  someText: "Some hard coted text"
} ;