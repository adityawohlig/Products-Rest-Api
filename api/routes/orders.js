const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    res.status(200).json({
        message: 'Orders Fetched'
    })
});

router.post('/', function(req, res, next){
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    };

    res.status(201).json({
        message: 'Order is created successfully',
        order: order
    })
})

module.exports = router;