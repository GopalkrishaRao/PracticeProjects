const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next)=>{
    // res.sendFile(path.join(__dirname, '../','views', 'shop.html'))
    //  use rootDir Helper function insted of above code
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir,'views', 'shop.html'))

    // for pug
    const products=adminData.products;
    res.render('shop', {prods:products, pageTitle:'Shop', path:'/'})
});

module.exports = router;