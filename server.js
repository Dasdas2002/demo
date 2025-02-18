const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('welcome to ecommerce website');
});
app.get('/product/:id', (req, res) => {
    let productid = req.params.id;
    res.send('You requested product ' + productid);
});
app.get('/search', (req, res) => {
    if(req.query.name && req.query.category){
        res.send('You searched for ' + req.query.name + ' and price is ' + req.query.category);
    }else{
        res.send('serch requires name and category');
    }
});
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});