const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method =req.method;

    if (url === '/'){
     res.write('<html>');
     res.write(`<head>
                    <title>
                        Assignmet
                    </title>
                </head>`);
     res.write(`<body>
      <h2>Hello welcome to the page</h2>
      <form action="/create-user" method="POST">
      <input type = "text" name="user">
      <button type = "submit"> Add User </button>
      </form>
      </body>`);
     res.write('</html>');
     return res.end();
    }

    if(url==='/user' && method==='POST'){
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
        fs.writeFile('users.txt', message, (err)=>{
          res.statusCode=302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });

       
    }
    res.write('<html>');
    res.write(`<head>
                <title>
                    Assignmet
                </title>
            </head>`);
 res.write(`<body>
  Node assignment
  <h2> Lis of users </h2>
  <div>
    <ul>
        <li> User1 </li>
        <li> User2 </li>
        <li> User3 </li>
        <li> User4 </li>
    </ul>
  </div>
  </body>`);
    res.write('</html>');
    return res.end();
};

module.exports = requestHandler;