const express = require('express');
const path = require('path');

const router = express.Router();

const products=[];
// /admin/add-product=>get
router.get('/add-product', (req, res, next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: 'Add Product',
    path:'/admin/add-product',
    formCSS: true,
    productCSS:true,
    activeAddProduct:true
    });

    
    // res.send(`
    // <form action='/admin/add-product' method='POST'>
    //     <input type='text' name='title'>
    //     <button type='submit'>
    //      Add product </button>
    // </form>`)
});

// /admin/add-product=>post
router.post('/add-product', (req, res, next)=>{
    // console.log(req.body);
    products.push({title:req.body.title})
    res.redirect('/');
});

// module.exports = router;
exports.routes=router;
exports.products=products;