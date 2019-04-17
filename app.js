// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     //if we don't have next(), 
//     //it wait for response, 
//     //it stop its journy
//     //allows the request to continue to the next middleware in line
//     next(); 
// })

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// })

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
})

//不需要這段程式碼，express有提供　
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);