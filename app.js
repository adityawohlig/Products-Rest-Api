const express = require('express');
const app = express();
const morgan = require('morgan');
// ----------------------------------------------------------------
// morgan console logs the requests
// ----------------------------------------------------------------


// router being exported from respective module.exports, see files
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

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

// CORS Error Handling


// ----------------------------------------------------------------

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "It works!"
//     });
// });
// ----------------------------------------------------------------

// here app is not app.js 
module.exports = app;