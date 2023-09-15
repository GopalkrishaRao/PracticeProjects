const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// link css external file
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    // res.status(404).send("Page Not Found")
})

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
// both above lines can be shortend into