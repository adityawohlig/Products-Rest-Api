const express = require('express');
const app = express();
const morgan = require('morgan');
// ----------------------------------------------------------------
// morgan console logs the requests
// ----------------------------------------------------------------


// router being exported from respective module.exports, see files
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// CORS Error Handling
// Specify this before routes
// ----------------------------------------------------------------

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // if not all website replace * with domain http:myweb.com etc.

    // tell all headers accepted
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTONS'){
        // browser sends options request first before get or post

        res.header('Access-Control-Allow-Methods', 'GET, POST','PUT', 'PATCH','DELETE');
        return res.status(200).json({});
        // empty obj sent
    }
    next();
})




// instead of body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
// here request works for get, post etc, it is middleware


// error handling
// ----------------------------------------------------------------
app.use(function(req, res, next) {
    const error = new Error('Not Found the Page buddy');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            // most error have message property
            message: error.message
        }
    })
});



// ----------------------------------------------------------------

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "It works!"
//     });
// });
// ----------------------------------------------------------------

// here app is not app.js 
module.exports = app;